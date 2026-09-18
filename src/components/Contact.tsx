import { profile } from "../data/profile";
import { ArrowDown } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const { links } = profile;

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Reveal>
          <h2 className="contact-title">
            Say
            <br />
            hello.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <a className="contact-email" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </Reveal>
        <Reveal className="contact-links" delay={120}>
          <a
            className="contact-link"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="contact-link"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a className="contact-link" href={links.phoneTel}>
            {links.phone}
          </a>
        </Reveal>
        <div className="contact-cv" id="cv">
          <Reveal delay={140}>
            <h3 className="contact-cv-label">Download my CV</h3>
            <div className="contact-cv-links">
              {profile.cvs.map((cv) => (
                <a
                  key={cv.href}
                  className="contact-cv-link"
                  href={cv.href}
                  download
                  aria-label={`Download the ${cv.label} CV (PDF)`}
                >
                  <span>
                    {cv.label}
                    <span className="contact-cv-type">PDF</span>
                  </span>
                  <ArrowDown />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="contact-education">{profile.education}</p>
          <p className="contact-footer">
            Made with care by Aradhya Khandelwal · © 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
