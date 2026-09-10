import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Ideas() {
  return (
    <section className="ideas" id="ideas">
      <Reveal className="ideas-header">
        <span className="index-tag">Index 04 — Writing</span>
        <h2 className="ideas-title">Ideas on paper</h2>
      </Reveal>
      <div className="ideas-grid">
        {profile.ideas.map((idea, i) => (
          <Reveal as="article" className="idea-card" key={idea.title} delay={i * 80}>
            <h3 className="idea-title">{idea.title}</h3>
            <p className="idea-venue">{idea.venue}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
