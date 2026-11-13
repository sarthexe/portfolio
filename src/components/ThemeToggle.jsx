import { flushSync } from "react-dom";

export default function ThemeToggle({ theme, setTheme }) {
  return (
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
        document.documentElement.style.setProperty(
          "--theme-x",
          `${rect.left + rect.width / 2}px`,
        );
        document.documentElement.style.setProperty(
          "--theme-y",
          `${rect.top + rect.height / 2}px`,
        );
        document.startViewTransition(apply);
      }}
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
}
