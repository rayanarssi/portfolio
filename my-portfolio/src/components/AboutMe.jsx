import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        {/* Replace with your "About Me" image */}
        <img src="/assets/about-me-image.png" alt="Rayan Arssi" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <h3>Passionate about creating digital solutions</h3>
        <p>
          I am a third-year student passionate about web development, specializing in
          building full-stack applications that balance clean design with strong
          functionality. While I don't have professional work experience yet, I have
          completed multiple projects that allowed me to apply my skills in real-world
          scenarios. My journey started with a curiosity about how websites work, and it
          has grown into a passion for creating seamless and user-friendly applications.
        </p>
        <p>
          Great software is more than just code; it's about solving real problems and
          creating meaningful user experiences. From complex web apps to simple landing
          pages, I focus on detail, usability, and excellence.
        </p>
        <div className="about-stats">
          <div className="stat-box">
            <h4>3rd Year</h4>
            <p>Web Development Student</p>
          </div>
          <div className="stat-box">
            <h4>100%</h4>
            <p>Passion for Design & Web</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;