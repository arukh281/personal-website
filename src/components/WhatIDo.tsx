import "./styles/Hobbies.css";
import "./styles/WhatIDo.css";
import { profile } from "../data/profile";

const WhatIDo = () => {
  return (
    <div className="whatIDO" id="life-hobbies">
      <div className="what-box">
        <h2 className="what-life-title">
          Life <span className="what-life-amp">&</span>{" "}
          <span className="what-life-sub what-life-sub-block">hobbies</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in what-life-box-in">
          <p className="hobbies-lead what-life-lead">
            Away from keyboards and loss curves—rhythm, frames, roads, and good
            food keep me grounded.
          </p>
          <div className="hobbies-grid what-life-grid">
            {profile.hobbies.map((h) => (
              <div className="hobbies-card" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
