import React from "react";
import { motion } from "framer-motion";
import projectData from "../data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <img className="projects_green" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736941/Projects_green_lioudb.svg" alt="" />
      <img className="projects_red1" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736942/Projects_red1_k1a1jh.svg" alt="" />
      <img className="projects_red2" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736942/Projects_red2_g1pb98.svg" alt="" />
      <img className="projects_red3" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736942/Projects_red3_vbsg1j.svg" alt="" />
      <img className="projects_blue1" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736940/Projects_blue1_zxqt48.svg" alt="" />
      <img className="projects_blue2" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736941/Projects_blue2_fqwjhz.svg" alt="" />
      <img className="projects_blue3" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736941/Projects_blue3_zflmhw.svg" alt="" />
      <img className="projects_blue4" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736941/Projects_blue4_v2ikc9.svg" alt="" />
      <img className="projects_lightblue" src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736942/Projects_lightblue_ovvtzc.svg" alt="" />

      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 160, damping: 18, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            {project.picture && (
              <div className="project-image-wrapper">
                <img className="project-image" src={project.picture} alt={project.title} />
              </div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.text}</p>

              <div className="project-softwares">
                {project.Softwares.map((software, i) => (
                  <span key={i} className="software-tag">
                    {software}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.Links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                  >
                    {link.img && (
                      <img
                        src={link.img}
                        alt={link.label}
                        className="project-link-icon"
                        style={{ width: "10px", height: "10px", marginRight: "6px", verticalAlign: "middle" }}
                      />
                    )}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
