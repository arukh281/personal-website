import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/profile";

const Contact = () => {
  const { links } = profile;
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={`mailto:${links.email}`}
                data-cursor="disable"
              >
                {links.email}
              </a>
            </p>
            <p>
              <a href={links.phoneTel} data-cursor="disable">
                {links.phone}
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Manipal University Jaipur — B.Tech Computer Science, Sep 2022 –
              Jun 2026 · CGPA 8.03
            </p>
            <p>
              Espee Global School — 12th PCM, Apr 2021 – Mar 2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aradhya Khandelwal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
