import React from "react";
import projectData from "../data/projects.json";
import "./Projects.css";

const Projects = () => {
	return (
		<section id="projects" className="projects-section">
			<img
				className="projects_green"
				src="src/assets/Projects_green.svg"
				alt=""
			/>
			<img
				className="projects_red1"
				src="src/assets/Projects_red1.svg"
				alt=""
			/>
			<img
				className="projects_red2"
				src="src/assets/Projects_red2.svg"
				alt=""
			/>
			<img
				className="projects_red3"
				src="src/assets/Projects_red3.svg"
				alt=""
			/>

			<img
				className="projects_blue1"
				src="src/assets/Projects_blue1.svg"
				alt=""
			/>
			<img
				className="projects_blue2"
				src="src/assets/Projects_blue2.svg"
				alt=""
			/>
			<img
				className="projects_blue3"
				src="src/assets/Projects_blue3.svg"
				alt=""
			/>
			<img
				className="projects_blue4"
				src="src/assets/Projects_blue4.svg"
				alt=""
			/>

			<img className="projects_lightblue" src="src/assets/Projects_lightblue.svg" alt="" />

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
