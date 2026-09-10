import { profile } from "../data/profile";
import Reveal from "./Reveal";

const markClass: Record<(typeof profile.life)[number]["mark"], string> = {
  wave: "life-mark-wave",
  circle: "life-mark-circle",
  path: "life-mark-path",
  spiral: "life-mark-spiral",
};

export default function Life() {
  return (
    <section className="life" id="life">
      <div className="life-inner">
        <Reveal>
          <span className="index-tag">Index 05 — Off Screen</span>
          <h2 className="life-title">Away from the screen</h2>
          <p className="life-lead">
            Rhythm, frames, roads, and good food keep me grounded.
          </p>
        </Reveal>
        <div className="life-grid">
          {profile.life.map((item, i) => (
            <Reveal
              key={item.word}
              className="life-quadrant"
              delay={i * 70}
            >
              <div
                className={`life-mark ${markClass[item.mark]}`}
                aria-hidden
              />
              <h3 className="life-word">{item.word}</h3>
              <p className="life-line">{item.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
