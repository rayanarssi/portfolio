import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<section id="about" className="about-section">
			<img
				className="about_pink"
				src="./src/assets/About_pink.svg"
				alt=""
			/>
			<img
				className="about_red"
				src="./src/assets/About_red.svg"
				alt=""
			/>

			<h2 className="about-title">About Me</h2>
			<div className="about-main">
				<div className="about-image">
					<img src="src/assets/About_image.png" alt="Rayan Arssi" />
				</div>
				<div className="about-content">
					<h3>Passionate about creating digital solutions</h3>
					<p>
						I am a third-year student passionate about web development,
						specializing in building full-stack applications that balance clean
						design with strong functionality. While I don't have professional
						work experience yet, I have completed multiple projects that allowed
						me to apply my skills in real-world scenarios. My journey started
						with a curiosity about how websites work, and it has grown into a
						passion for creating seamless and user-friendly applications.
					</p>
					<p>
						Great software is more than just code; it's about solving real
						problems and creating meaningful user experiences. From complex web
						apps to simple landing pages, I focus on detail, usability, and
						excellence.
					</p>
					<div className="about-stats">
						<div className="stat-box">
							<h4>3rd Year</h4>
							<p>Web Development Student</p>
						</div>
						<div className="stat-box">
							<h4>100%</h4>
							<p>Passion for Design & Web</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
