import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
	return (
		<section id="home" className="home-section">
			<div className="home-content">
				<h1 className="name">Rayan Arssi</h1>
				<p className="title">Junior Frontend Developer & UX Designer</p>
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
					<img src="./src/assets/Github.svg" alt="GitHub" />
					<img src="./src/assets/LinkedIn.svg" alt="LinkedIn" />
					<img src="./src/assets/Email.svg" alt="Email" />
				</div>
				<div className="scroll-indicator">
					<Link to="about" smooth={true} duration={500}>
						<img src="./src/assets/Arrow.svg" alt="Scroll Down" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Home;
