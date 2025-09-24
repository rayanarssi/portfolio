import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <img className="about_pink" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736934/About_pink_op8uzj.svg" alt="" />
      <img className="about_red" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736934/About_red_zkcqtt.svg" alt="" />

      <h2 className="about-title">About Me</h2>

      <div className="about-main">
        <motion.div
          className="about-image"
          initial={{ rotate: -2, scale: 0.96, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
        >
          <img src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736935/About_image_qqcljj.png" alt="Rayan Arssi" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Passionate about creating digital solutions</h3>
          <p>
            I am a third-year student passionate about web development, specializing in building full-stack applications that balance clean design with strong functionality. While I don't have professional work experience yet, I have completed multiple projects that allowed me to apply my skills in real-world scenarios. My journey started with a curiosity about how websites work, and it has grown into a passion for creating seamless and user-friendly applications.
          </p>
          <p>
            Great software is more than just code; it's about solving real problems and creating meaningful user experiences. From complex web apps to simple landing pages, I focus on detail, usability, and excellence.
          </p>

          <div className="about-stats">
            <motion.div className="stat-box" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.4 }}>
              <h4>3rd Year</h4>
              <p>Web Development Student</p>
            </motion.div>
            <motion.div className="stat-box" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.4, delay: 0.08 }}>
              <h4>100%</h4>
              <p>Passion for Design & Web</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
