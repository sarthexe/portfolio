import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MathFormula from "../components/MathFormula.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { useTheme } from "../hooks/useTheme.js";
import { blogPosts } from "../blogs/index.js";

function renderInline(text, keyPrefix = "in") {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^$]+\$)/g);
  return tokens.map((token, idx) => {
    const key = `${keyPrefix}-${idx}`;
    if (!token) return null;
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={key}>{renderInline(token.slice(2, -2), key)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={key}>{renderInline(token.slice(1, -1), key)}</em>;
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return <code key={key}>{token.slice(1, -1)}</code>;
    }
    if (token.startsWith("$") && token.endsWith("$")) {
      return <MathFormula key={key} tex={token.slice(1, -1)} />;
    }
    if (token.includes("\n")) {
      const lines = token.split("\n");
      return lines.map((line, lineIdx) => (
        <Fragment key={`${key}-l-${lineIdx}`}>
          {line}
          {lineIdx < lines.length - 1 ? <br /> : null}
        </Fragment>
      ));
    }
    return token;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [theme, setTheme] = useTheme();
  const post = slug ? blogPosts[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const prev = document.title;
    document.title = `${post.title} — Sarthak Maurya`;
    return () => {
      document.title = prev;
    };
  }, [post]);

  if (!post) {
    return (
      <>
        <div className="aurora" aria-hidden="true" />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <main className="blog-main raw">
          <nav className="blog-nav">
            <Link to="/#blogs">← back to portfolio</Link>
          </nav>
          <h1 className="blog-title">post not found</h1>
          <p>that blog post doesn’t exist yet.</p>
        </main>
      </>
    );
  }

  const tocItems = post.blocks.filter((b) => b.type === "h2");

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <main className="blog-main raw">
        <nav className="blog-nav">
          <Link to="/#blogs">← back to portfolio</Link>
          {post.mediumHref && (
            <a href={post.mediumHref} target="_blank" rel="noreferrer" className="dim-link">
              medium ↗
            </a>
          )}
        </nav>

        <article className="blog-article">
          <header className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            <p className="blog-meta">
              {post.author} · {post.date} · {post.readTime}
            </p>
          </header>

          {tocItems.length > 0 && (
            <details className="blog-toc">
              <summary>table of contents</summary>
              <ol>
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ol>
            </details>
          )}

          {post.blocks.map((block, idx) => {
            const key = `b-${idx}`;
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={key} id={block.id} className="blog-h2">
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={key} id={block.id} className="blog-h3">
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p key={key} className="blog-p">
                    {renderInline(block.text, key)}
                  </p>
                );
              case "ul":
                return (
                  <ul key={key} className="blog-list">
                    {block.items.map((item, i) => (
                      <li key={`${key}-li-${i}`}>{renderInline(item, `${key}-li-${i}`)}</li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={key} className="blog-list">
                    {block.items.map((item, i) => (
                      <li key={`${key}-li-${i}`}>{renderInline(item, `${key}-li-${i}`)}</li>
                    ))}
                  </ol>
                );
              case "math":
                return (
                  <div key={key} className="math-box">
                    <MathFormula tex={block.tex} display />
                  </div>
                );
              case "math-group":
                return (
                  <div key={key} className="math-box math-group">
                    {block.equations.map((tex, i) => (
                      <MathFormula key={`${key}-eq-${i}`} tex={tex} display />
                    ))}
                  </div>
                );
              case "figure":
                return (
                  <figure key={key} className="blog-figure">
                    <img src={block.src} alt={block.alt} loading="lazy" />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </figure>
                );
              default:
                return null;
            }
          })}

          {post.tags?.length > 0 && (
            <footer className="blog-footer">
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    #{tag.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>
              <Link to="/#blogs">← back to portfolio</Link>
            </footer>
          )}
        </article>
      </main>
    </>
  );
}
