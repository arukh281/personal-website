import "./styles/About.css";
import { profile } from "../data/profile";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        {profile.about.map((para, i) => (
          <p className="para" key={i}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
