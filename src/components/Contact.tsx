import { profile } from "../data/profile";
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
