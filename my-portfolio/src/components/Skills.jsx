import React from "react";
import "./Skills.css";

const skillsData = [
	{
		category: "Frontend",
		image: "src/assets/Skills_red.svg",
		list: ["React", "Vite.js", "Vue.js", "HTML/CSS"],
	},
	{
		category: "Backend",
		image: "src/assets/Skills_green.svg",
		list: ["Node.js", "Express", "MongoDB", "MySQL"],
	},
	{
		category: "Design",
		image: "src/assets/Skills_pink.svg",
		list: ["Figma", "Adobe XD", "Photoshop", "Adobe Illustrator"],
	},
	{
		category: "Still Learning",
		image: "src/assets/Skills_blue.svg",
		list: ["Angular", "Three.js", "TypeScript"],
	},
];

const Skills = () => {
	return (
		<section id="skills" className="skills-section">
			<img
				className="skills_orange"
				src="src/assets/Skills_orange.svg"
				alt=""
			/>
			<img
				className="skills_yellow"
				src="src/assets/Skills_yellow.svg"
				alt=""
			/>

			<h2>Skills & Technologies</h2>
			<div className="skills-grid">
				{skillsData.map((section, index) => (
					<div key={index} className="skills-card">
						<div className="skills-header">
							<img
								src={section.image}
								alt={`${section.category} icon`}
								className="skills-image"
							/>{" "}
							<h3>{section.category}</h3>
						</div>

						<div className="skill-tags">
							{section.list.map((skill, i) => (
								<span key={i} className="skill-tag">
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
