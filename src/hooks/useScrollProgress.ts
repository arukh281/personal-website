import { useEffect } from "react";

export function useScrollProgress() {
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      const progress = max > 0 ? scrollTop / max : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toFixed(4)
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
}
