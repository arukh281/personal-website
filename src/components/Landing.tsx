import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  const { landing, name, tagline } = profile;
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{landing.greeting}</h2>
            <h1>
              {name.first}
              <br />
              <span>{name.last}</span>
            </h1>
            <p className="landing-tagline">{tagline}</p>
          </div>
          <div className="landing-info">
            <h3>{landing.rolePrefix}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{landing.flipA1}</div>
              <div className="landing-h2-2">{landing.flipA2}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{landing.flipB1}</div>
              <div className="landing-h2-info-1">{landing.flipB2}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
