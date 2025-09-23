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
      <img className="projects_green" src="src/assets/Projects_green.svg" alt="" />
      <img className="projects_red1" src="src/assets/Projects_red1.svg" alt="" />
      <img className="projects_red2" src="src/assets/Projects_red2.svg" alt="" />
      <img className="projects_red3" src="src/assets/Projects_red3.svg" alt="" />
      <img className="projects_blue1" src="src/assets/Projects_blue1.svg" alt="" />
      <img className="projects_blue2" src="src/assets/Projects_blue2.svg" alt="" />
      <img className="projects_blue3" src="src/assets/Projects_blue3.svg" alt="" />
      <img className="projects_blue4" src="src/assets/Projects_blue4.svg" alt="" />
      <img className="projects_lightblue" src="src/assets/Projects_lightblue.svg" alt="" />

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
