import { CSSProperties } from "react";
import { profile } from "../data/profile";
import { ArrowDown } from "./Icons";

export default function Hero() {
  const { tagline } = profile;

  return (
    <section className="hero" id="top">
      <div className="hero-viewfinder" aria-hidden />
      <div className="hero-rhythm" aria-hidden />
      <div className="hero-inner">
        <span className="hero-greeting hero-animate">Hello —</span>
        <h1 className="hero-name">
          <span
            className="hero-name-line hero-animate"
            style={{ "--i": 0 } as CSSProperties}
          >
            ARA
          </span>
          <span
            className="hero-name-line hero-animate hero-name-accent"
            style={{ "--i": 1 } as CSSProperties}
          >
            DHYA
          </span>
          <span
            className="hero-name-line hero-animate"
            style={{ "--i": 2 } as CSSProperties}
          >
            KHANDEL
          </span>
          <span
            className="hero-name-line hero-animate hero-name-outline"
            style={{ "--i": 3 } as CSSProperties}
          >
            WAL
          </span>
        </h1>
        <div
          className="hero-tagline-box hero-animate"
          style={{ "--i": 4 } as CSSProperties}
        >
          <p className="hero-tagline">
            {tagline.line1}
            <br />
            <span className="hero-tagline-accent">{tagline.accent}</span>
            <br />
            {tagline.line2}
          </p>
          <a className="hero-cta" href="#about">
            Explore
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}
