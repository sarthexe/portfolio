import katex from "katex";
import "katex/dist/katex.min.css";

export default function MathFormula({ tex, display = false }) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: false,
  });

  if (display) {
    return (
      <div
        className="math-block"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className="math-inline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
