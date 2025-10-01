import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Home.css";

const container = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			when: "beforeChildren",
			staggerChildren: 0.08,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const float = {
	animate: { y: [0, -8, 0] },
	transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const Home = () => {
	return (
		<motion.section
			id="home"
			className="home-section"
			initial="hidden"
			animate="visible"
			variants={container}
		>
			{/* floating background shapes */}
			<motion.img
				className="home_blue"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736938/Home_blue_r9pvwi.svg"
				alt="Rayan Arssi"
				{...float}
			/>
			<motion.img
				className="home_green"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736938/Home_green_hlxfy4.svg"
				alt="Rayan Arssi"
				{...float}
				transition={{ ...float.transition, duration: 5 }}
			/>
			<motion.img
				className="home_yellow"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736939/Home_yellow_cv1z2p.svg"
				alt="Rayan Arssi"
				{...float}
				transition={{ ...float.transition, duration: 6 }}
			/>
			<motion.img
				className="home_lightblue"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736938/Home_lightblue_ugnqet.svg"
				alt="Rayan Arssi"
				{...float}
				transition={{ ...float.transition, duration: 5.5 }}
			/>
			<motion.img
				className="home_purple"
				src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736939/Home_purple_ok2h1y.svg"
				alt="Rayan Arssi"
				{...float}
				transition={{ ...float.transition, duration: 6.5 }}
			/>

			<motion.div className="home-content" variants={container}>
				<motion.h1 className="name" variants={item}>
					Rayan Arssi
				</motion.h1>
				<motion.p className="title" variants={item}>
					Frontend Developer & Web Designer
				</motion.p>
				<motion.p className="introduction" variants={item}>
					Creating clear and engaging digital experiences with a strong focus on
					usability and design. Skilled in frontend development with React and
					in crafting user-friendly, visually refined interfaces.
				</motion.p>

				<motion.div className="home-buttons" variants={item}>
					<motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
						<Link to="projects" smooth duration={500} className="cta-button">
							View My Work
						</Link>
						<Link to="contact" smooth duration={500} className="cta-button">
							Get In Touch
						</Link>
					</motion.div>
				</motion.div>

				<motion.div className="social-icons" variants={item}>
					<a href="https://www.linkedin.com/in/rayan-arssi-138a062b9/">
						<motion.img
							src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736939/Linkedin_sgodmi.svg"
							alt="LinkedIn"
							whileHover={{ scale: 1.05, rotate: -2 }}
							whileTap={{ scale: 0.95 }}
						/>
					</a>

					<Link to="contact" smooth duration={500}>
						<motion.img
							src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736937/Email_qyuaft.svg"
							alt="Email"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						/>
					</Link>
				</motion.div>

				<motion.div
					className="scroll-indicator"
					variants={item}
					animate={{ y: [0, 6, 0] }}
					transition={{ duration: 1.6, repeat: Infinity }}
				>
					<Link to="about" smooth duration={500}>
						<img
							src="https://res.cloudinary.com/ddhxfqr1y/image/upload/v1758736936/Arrow_x5hygk.svg"
							alt="Scroll Down"
						/>
					</Link>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Home;
