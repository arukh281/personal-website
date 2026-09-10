import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-inner">
        <Reveal>
          <span className="index-tag">Index 03 — Timeline</span>
          <h2 className="experience-title">
            Where I've
            <br />
            Been
          </h2>
        </Reveal>
        <div className="experience-list">
          {profile.experience.map((item, i) => (
            <Reveal
              as="article"
              key={`${item.year}-${item.role}`}
              className="experience-item"
              delay={i * 60}
            >
              <span className="experience-year">{item.year}</span>
              <div>
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-line">{item.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
