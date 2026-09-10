import { profile } from "../data/profile";
import { ArrowForward } from "./Icons";
import Reveal from "./Reveal";

const sizeClass = {
  md: "work-card-h-md",
  lg: "work-card-h-lg",
  wide: "work-card-h-wide",
} as const;

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
      <div className="work-grid">
        {profile.work.map((project, i) => {
          const isWide = project.variant === "wide";
          const isDark = project.variant === "dark";
          const isLight = project.variant === "light";

          const classNames = [
            "work-card",
            sizeClass[project.size],
            isLight && "work-card-light",
            isDark && "work-card-dark work-card-deco-lines",
            isWide && "work-card-wide",
            isDark && i === 1 && "work-card-offset",
            isWide && "work-card-wide-offset",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Reveal key={project.num} delay={i * 70}>
              <a
                className={classNames}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-work-card={project.num}
              >
                {isLight && i === 0 && (
                  <div className="work-card-deco-x" aria-hidden />
                )}
                <div className="work-card-header">
                  <h3 className="work-card-title">
                    {project.title[0]}
                    <br />
                    {project.highlight ? (
                      <span className="work-card-highlight">
                        {project.highlight}
                      </span>
                    ) : (
                      project.title[1]
                    )}
                  </h3>
                  <span className="work-card-num">{project.num}</span>
                </div>
                <div className="work-card-footer">
                  <p className="work-card-desc">{project.description}</p>
                  <ArrowForward />
                </div>
                {isWide && <div className="work-card-wide-deco" aria-hidden />}
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
