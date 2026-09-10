import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function About() {
  const { about, pillars } = profile;

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <Reveal className="about-card">
          <h2 className="section-label">Index 01 — Context</h2>
          <p className="about-headline">{about.headline}</p>
          <div className="about-body">{about.body}</div>
          <div className="about-also">{about.also}</div>
        </Reveal>
        <div className="about-pillars" aria-hidden>
          <div className="pillar pillar-build reveal" style={{ transitionDelay: "80ms" }}>
            <span>{pillars[0]}</span>
          </div>
          <div className="pillar pillar-research reveal" style={{ transitionDelay: "160ms" }}>
            <span>{pillars[1]}</span>
          </div>
          <div className="pillar pillar-create reveal" style={{ transitionDelay: "240ms" }}>
            <span>{pillars[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
