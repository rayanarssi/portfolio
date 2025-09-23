import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
	const form = useRef();

	const sendEmail = async (e) => {
		e.preventDefault();
		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			alert("Email service is not configured. Please try again later.");
			console.error("EmailJS ENV missing", {
				SERVICE_ID,
				TEMPLATE_ID,
				PUBLIC_KEY,
			});
			return;
		}
		try {
			const result = await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				form.current,
				{ publicKey: PUBLIC_KEY }
			);
			console.log("SUCCESS!", result);
			alert("Message sent successfully!");
			form.current?.reset();
		} catch (err) {
			console.error("FAILED...", err?.text || err);
			alert("Failed to send the message. Please try again.");
		}
	};

	return (
		<motion.section
			id="contact"
			className="contact-section"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.6 }}
		>
			<img
				className="contact_purple"
				src="src/assets/Contact_purple.svg"
				alt=""
			/>
			<img
				className="contact_lightblue"
				src="src/assets/Contact_lightblue.svg"
				alt=""
			/>
			<img className="contacts_blue" src="src/assets/Contact_blue.svg" alt="" />

			<h2 className="contact-title">Get In Touch</h2>

			<div className="contact-container">
				<div className="contact-info">
					<h3>Let's work together</h3>
					<p>
						I'm currently looking for a stage opportunity where I can apply and
						grow my skills in web development. I'm always excited about new
						opportunities and projects, so whether you have an internship
						position available or just want to chat about web development, feel
						free to reach out.
					</p>

					<div className="contact-details">
						<div className="detail-item">
							<img src="src/assets/Email_contact.svg" alt="Email Icon" />
							<p>
								<span className="contact_title">Email</span>
								<br />
								rayan.arssi@student.ehb.be
							</p>
						</div>
						<div className="detail-item">
							<img src="src/assets/Phone.svg" alt="Phone Icon" />
							<p>
								<span className="contact_title">Phone</span>
								<br />
								+32 465 56 98 96
							</p>
						</div>
						<div className="detail-item">
							<img src="src/assets/Location.svg" alt="Location Icon" />
							<p>
								<span className="contact_title">Location</span>
								<br />
								Belgium
							</p>
						</div>
					</div>
				</div>

				<motion.div
					className="contact-form-container"
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, delay: 0.05 }}
				>
					<h3>Send me a message</h3>
					<form ref={form} onSubmit={sendEmail}>
						<div className="form-group">
							<motion.input
								type="text"
								name="first_name"
								required
								placeholder="First Name"
								whileFocus={{ scale: 1.01 }}
							/>
							<motion.input
								type="text"
								name="last_name"
								required
								placeholder="Last Name"
								whileFocus={{ scale: 1.01 }}
							/>
						</div>

						<div className="form-group full-width">
							<motion.input
								type="email"
								name="user_email"
								required
								placeholder="Email Address"
								whileFocus={{ scale: 1.01 }}
							/>
						</div>
						<div className="form-group full-width">
							<motion.input
								type="text"
								name="subject"
								required
								placeholder="Subject"
								whileFocus={{ scale: 1.01 }}
							/>
						</div>
						<div className="form-group full-width">
							<motion.textarea
								name="message"
								required
								placeholder="Your message..."
								whileFocus={{ scale: 1.005 }}
							/>
						</div>

						<motion.button
							type="submit"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
						>
							Send Message
						</motion.button>
					</form>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Contact;
