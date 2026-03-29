import { FiExternalLink } from "react-icons/fi";
import "./styles/Certifications.css";
import { profile } from "../data/profile";

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-inner">
        <h2>
          <span className="certifications-title-accent">Certifications</span>
        </h2>
        <p className="certifications-lead">
          Courses and programs I have completed—complementing hands-on work in ML,
          backend, and automation.
        </p>
        <ul className="certifications-list">
          {profile.certifications.map((c) => (
            <li key={c.title}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="certifications-link"
              >
                <span className="certifications-link-text">{c.title}</span>
                <FiExternalLink
                  className="certifications-link-icon"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
