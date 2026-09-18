import { profile } from "../data/profile";
import Reveal from "./Reveal";

type Idea = (typeof profile.ideas)[number];

function IdeaContent({ idea }: { idea: Idea }) {
  return (
    <>
      {idea.role && <span className="idea-role">{idea.role}</span>}
      <h3 className="idea-title">{idea.title}</h3>
      <p className="idea-venue">{idea.venue}</p>
    </>
  );
}

export default function Ideas() {
  return (
    <section className="ideas" id="ideas">
      <Reveal className="ideas-header">
        <span className="index-tag">Index 04 — Papers &amp; patent</span>
        <h2 className="ideas-title">Ideas on paper</h2>
      </Reveal>
      <div className="ideas-grid">
        {profile.ideas.map((idea, i) => (
          <Reveal
            key={idea.title}
            delay={i * 80}
            className={idea.kind === "patent" ? "ideas-grid-full" : undefined}
          >
            {idea.link ? (
              <a
                className="idea-card"
                href={idea.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IdeaContent idea={idea} />
              </a>
            ) : (
              <div className="idea-card idea-card-patent">
                <IdeaContent idea={idea} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
