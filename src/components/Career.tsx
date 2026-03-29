import "./styles/Career.css";
import { profile } from "../data/profile";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {profile.career.map((job) => (
            <div className="career-info-box" key={`${job.org}-${job.range}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>
                    {job.org} · {job.location}
                  </h5>
                </div>
                <h3>{job.period}</h3>
              </div>
              <p>
                <span className="career-range">{job.range}</span>
                <br />
                {job.bullets.map((b, i) => (
                  <span key={i}>
                    • {b}
                    {i < job.bullets.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="career-pubs">
          <h3 className="career-pubs-title">Publications</h3>
          <ul className="career-pubs-list">
            {profile.publications.map((pub) => (
              <li key={pub.title}>
                <em>{pub.title}</em>
                <span className="career-pubs-venue"> — {pub.venue}</span>
              </li>
            ))}
          </ul>
          <h3 className="career-pubs-title career-patent-title">Patent</h3>
          <p className="career-patent">{profile.patent}</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
