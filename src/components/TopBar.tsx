import { useEffect, useState } from "react";
import { profile } from "../data/profile";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      setHidden(y > lastY && y > 160);
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`top-bar${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}
    >
      <div className="top-bar-location">
        {profile.location}
        <br />
        {profile.locationSub}
      </div>
      <div className="top-bar-actions">
        <a href="#cv" className="top-bar-cv" aria-label="Download CV">
          <span className="top-bar-cv-long">Download </span>CV
        </a>
        <a href="#top" className="top-bar-mark" aria-label="Back to top">
          A.K.
        </a>
      </div>
    </header>
  );
}
