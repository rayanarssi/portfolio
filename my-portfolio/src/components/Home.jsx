import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
	return (
		<section id="home" className="home-section">
			<div className="home-content">
				<h1 className="name">Rayan Arssi</h1>
				<p className="title">Junior Frontend Developer & Web Designer</p>
				<p className="introduction">
					Crafting digital experiences with modern web technologies.
					Specializing in React, Node.js, and beautiful user interfaces.
				</p>
				<div className="home-buttons">
					<Link
						to="projects"
						smooth={true}
						duration={500}
						className="cta-button"
					>
						View My Work
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="cta-button"
					>
						Get In Touch
					</Link>
				</div>
				<div className="social-icons">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>
			<div className="scroll-indicator">
				<Link to="about" smooth={true} duration={500}>
					<BsArrowDownShort />
				</Link>
			</div>
		</section>
	);
};

export default Home;
