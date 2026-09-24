import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { portfolio } from "./src/data.js";

function wantsHtml(req) {
  const accept = req.headers.accept || "";
  return accept.includes("text/html");
}

function sendJson(res, body) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(body);
}

function portfolioJson() {
  const body = `${JSON.stringify(portfolio, null, 2)}\n`;

  const handle = async (req, res, next, load) => {
    try {
      const path = (req.url || "/").split("?")[0];
      const isRoot = path === "/" || path === "/index.html";
      const isFile = path === "/portfolio.json";
      if (!isFile && !(isRoot && !wantsHtml(req))) return next();
      const payload = load ? await load() : body;
      sendJson(res, payload);
    } catch (error) {
      next(error);
    }
  };

  return {
    name: "portfolio-json",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        handle(req, res, next, async () => {
          const mod = await server.ssrLoadModule("/src/data.js");
          return `${JSON.stringify(mod.portfolio, null, 2)}\n`;
        });
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        handle(req, res, next);
      });
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "portfolio.json",
        source: body,
      });
    },
  };
}

export default defineConfig({
  plugins: [portfolioJson(), react()],
  server: {
    host: true,
  },
});
