import React from "react";
import projectData from "../data/projects.json";
import "./Projects.css";

const Projects = () => {
	return (
		<section id="projects" className="projects-section">
			<h2>Featured Projects</h2>
			<div className="projects-grid">
				{projectData.map((project, index) => (
					<div key={index} className="project-card">
						{project.picture && (
							<div className="project-image-wrapper">
								<img
									className="project-image"
									src={project.picture}
									alt={project.title}
								/>
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
									<a
										key={i}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.img && (
											<img
												src={link.img}
												alt={link.label}
												className="project-link-icon"
												style={{
													width: "10px",
													height: "10px",
													marginRight: "6px",
													verticalAlign: "middle",
												}}
											/>
										)}
										{link.label}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
