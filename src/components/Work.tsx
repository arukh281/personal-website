import {
  profile,
  type CompactProject,
  type FeatureProject,
} from "../data/profile";
import { ArrowForward } from "./Icons";
import Reveal from "./Reveal";

const variantClass = {
  light: "work-card-light",
  dark: "work-card-dark work-card-deco-lines",
  accent: "work-card-accent",
} as const;

function TitleLines({
  lines,
  highlight,
}: {
  lines: readonly string[];
  highlight: string | null;
}) {
  return (
    <>
      {lines.map((line) => (
        <span
          key={line}
          className={
            line === highlight
              ? "work-title-line work-card-highlight"
              : "work-title-line"
          }
        >
          {line}
        </span>
      ))}
    </>
  );
}

function FeatureCard({ project }: { project: FeatureProject }) {
  const titleId = `work-${project.num}-title`;

  return (
    <article
      className={`work-feature work-feature-${project.tone}`}
      data-work-card={project.num}
      aria-labelledby={titleId}
    >
      <header className="work-feature-head">
        <div className="work-feature-meta">
          <span className="work-feature-num" aria-hidden>
            {project.num}
          </span>
          <span className="work-feature-tag">{project.tag}</span>
        </div>
        <h3 className="work-feature-title" id={titleId}>
          <TitleLines lines={project.title} highlight={project.highlight} />
        </h3>
      </header>

      <div className="work-feature-body">
        <p className="work-feature-summary" data-work-summary>
          {project.summary}
        </p>
        <p className="work-feature-detail">{project.detail}</p>

        {project.stats && (
          <dl className="work-stats">
            {project.stats.map((stat) => (
              <div className="work-stat" key={stat.value}>
                <dt className="work-stat-value">{stat.value}</dt>
                <dd className="work-stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.note && <p className="work-feature-note">{project.note}</p>}

        <ul className="work-stack" aria-label="Built with">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="work-feature-foot">
          {project.status && (
            <span className="work-feature-status">{project.status}</span>
          )}
          {project.link && (
            <a
              className="work-feature-link"
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.label}
              <span className="visually-hidden">
                {" "}
                for {project.title.join(" ")} (opens in a new tab)
              </span>
              <ArrowForward />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: CompactProject }) {
  const classNames = [
    "work-card",
    project.offset ? "work-card-h-lg" : "work-card-h-md",
    variantClass[project.variant],
    project.offset && "work-card-offset",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classNames}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-work-card={project.num}
    >
      {project.deco === "x" && <div className="work-card-deco-x" aria-hidden />}
      <div className="work-card-header">
        <h3 className="work-card-title">
          <TitleLines lines={project.title} highlight={project.highlight} />
        </h3>
        <span className="work-card-num">{project.num}</span>
      </div>
      <div className="work-card-footer">
        <p className="work-card-desc" data-work-summary>
          {project.summary}
        </p>
        <ArrowForward />
      </div>
      {project.deco === "grid" && (
        <div className="work-card-grid-deco" aria-hidden />
      )}
    </a>
  );
}

export default function Work() {
  return (
    <section className="work" id="work">
      <Reveal className="work-header">
        <span className="index-tag">Index 02 — Application</span>
        <h2 className="work-header-title">
          Selected
          <br />
          Work
        </h2>
      </Reveal>

      <div className="work-features">
        {profile.featured.map((project, i) => (
          <Reveal key={project.num} delay={i * 70}>
            <FeatureCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="work-subhead">
        <span className="index-tag">More projects</span>
      </Reveal>

      <div className="work-grid">
        {profile.work.map((project, i) => (
          <Reveal key={project.num} delay={i * 70}>
            <CompactCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
