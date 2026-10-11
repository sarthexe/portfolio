import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { portfolio, socialOrder } from "./data.js";

const metric = /(?<![A-Za-z0-9.])(\d{1,3}(?:,\d{3})*(?:\.\d+)?(?:-minute)?(?:%|\+|s)?)/g;

function Metrics({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(metric)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <span className="metric" key={start}>
        {match[1]}
      </span>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function External({ href, children }) {
  if (!href) return <span className="linkish">{children}</span>;
  const isExternal = href.startsWith("http");
  return (
    <a href={href} {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [photoMissing, setPhotoMissing] = useState(false);
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  const [origin] = useState(() => window.location.origin);
  const photoSrc = theme === "light" ? "/profile_pic2.jpg" : "/profile_pic.jpg";

  useEffect(() => {
    setPhotoMissing(false);
  }, [photoSrc]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f5e6cc" : "#090909");
  }, [theme]);

  useEffect(() => {
    const target = window.location.hash.slice(1);
    if (!target) return;
    document.getElementById(target)?.scrollIntoView();
  }, []);

  const curl = `curl ${origin}/portfolio.json`;

  async function copyCurl() {
    try {
      await navigator.clipboard.writeText(curl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <button
        type="button"
        className="theme-toggle"
        onClick={(event) => {
          const next = theme === "light" ? "dark" : "light";
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const apply = () => {
            document.documentElement.dataset.theme = next;
            flushSync(() => setTheme(next));
          };
          if (reduce || !document.startViewTransition) {
            apply();
            return;
          }
          const rect = event.currentTarget.getBoundingClientRect();
          document.documentElement.style.setProperty("--theme-x", `${rect.left + rect.width / 2}px`);
          document.documentElement.style.setProperty("--theme-y", `${rect.top + rect.height / 2}px`);
          document.startViewTransition(apply);
        }}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
      <main>
        <div className="name-row">
          <h1>{portfolio.info.name}</h1>
          <button
            type="button"
            className={`look${showPhoto && !photoMissing ? " open" : ""}`}
            aria-pressed={showPhoto && !photoMissing}
            onClick={() => setShowPhoto((open) => !open)}
          >
            <span className="prompt">click to see how i look</span>
            <img
              src={photoSrc}
              alt=""
              onError={() => setPhotoMissing(true)}
            />
          </button>
        </div>

        <h2>some things about me:</h2>
        <ul>
          <li>
            {portfolio.info.profession} in{" "}
            <External href={portfolio.info.locationHref}>{portfolio.info.location}</External>.
          </li>
          {portfolio.about.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li>
            elsewhere:{" "}
            {socialOrder.map((key, i) => (
              <span key={key}>
                <External href={portfolio.info.socials[key]}>{key}</External>
                {i < socialOrder.length - 1 ? ", " : "."}
              </span>
            ))}
          </li>
        </ul>
        <p className="resume-line">
          resume: <a href={portfolio.info.resume}>sarthak_resume.pdf</a>
        </p>

        <h2 id="work">some things i've worked on:</h2>
        {portfolio.work.map((job) => (
          <details className="job" key={`${job.company}-${job.year}`}>
            <summary>
              <span className="co">{job.company}</span>
              <span className="dim">
                {job.role} · {job.year}
              </span>
              <span
                className="json-btn"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  event.currentTarget.classList.toggle("open");
                }}
              >
                [json]
                <pre className="pop raw">{JSON.stringify(job, null, 2)}</pre>
              </span>
            </summary>
            <ul>
              {job.work.map((item) => (
                <li key={item}>
                  <Metrics text={item} />
                </li>
              ))}
            </ul>
            {job.tech?.length > 0 && <p className="tech">tech: {job.tech.join(", ")}</p>}
          </details>
        ))}

        <h2>some things i've made:</h2>
        <ul>
          {portfolio.projects.map((project) => (
            <li key={project.name}>
              {project.href ? (
                <External href={project.href}>{project.name}</External>
              ) : (
                <span className="co">{project.name}</span>
              )}
              {" — "}
              {project.about}
            </li>
          ))}
        </ul>

        <h2>blogs:</h2>
        <ul>
          {portfolio.blogs.map((post) => (
            <li key={post.href}>
              <External href={post.href}>{post.name}</External>
              {" — "}
              {post.about}
            </li>
          ))}
        </ul>

        <h2 id="off-the-clock">some things off the clock:</h2>
        <ul>
          {portfolio.off_the_clock.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li>
            music: <External href={portfolio.music}>a playlist that has heard things</External>.
          </li>
        </ul>

        <h2>this page is data:</h2>
        <div className="codeblock raw">
          <div className="codeblock-head">
            <span>bash</span>
            <button type="button" className="copy" onClick={copyCurl}>
              {copied ? "[copied]" : "[copy]"}
            </button>
          </div>
          <pre>{curl}</pre>
        </div>
      </main>
    </>
  );
}
