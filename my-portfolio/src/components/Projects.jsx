import React from 'react';
import projectData from '../data/projects.json';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.picture} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="project-softwares">
              {project.Softwares.map((software, i) => (
                <span key={i} className="software-tag">{software}</span>
              ))}
            </div>
            <div className="project-links">
              {project.Links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;