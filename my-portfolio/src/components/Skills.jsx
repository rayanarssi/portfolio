import React from "react";
import "./Skills.css";

const skillsData = [
	{
		category: "Frontend",
		image: "shttps://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736944/Skills_red_sjic41.svg",
		list: ["React", "Vite.js", "Vue.js", "HTML/CSS"],
	},
	{
		category: "Backend",
		image: "https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736943/Skills_green_yew5xj.svg",
		list: ["Node.js", "Express", "MongoDB", "MySQL"],
	},
	{
		category: "Design",
		image: "https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736943/Skills_pink_uhf2bi.svg",
		list: ["Figma", "Adobe XD", "Photoshop", "Adobe Illustrator"],
	},
	{
		category: "Still Learning",
		image: "https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736942/Skills_blue_ihxq52.svg",
		list: ["Angular", "Three.js", "TypeScript", "Framrer Motion"],
	},
];

const Skills = () => {
	return (
		<section id="skills" className="skills-section">
			<img
				className="skills_orange"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736943/Skills_orange_k0bn0x.svg"
				alt=""
			/>
			<img
				className="skills_yellow"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736934/Skills_yellow_idyqxy.svg"
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
