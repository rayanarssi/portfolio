import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
				publicKey: "YOUR_PUBLIC_KEY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
					alert("Message sent successfully!");
					form.current.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					alert("Failed to send the message. Please try again.");
				}
			);
	};

	return (
		<section id="contact" className="contact-section">
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

				<div className="contact-form-container">
					<h3>Send me a message</h3>
					<form ref={form} onSubmit={sendEmail}>
						<div className="form-group">
							<input
								type="text"
								name="first_name"
								required
								placeholder="First Name"
							/>
							<input
								type="text"
								name="last_name"
								required
								placeholder="Last Name"
							/>
						</div>

						<div className="form-group full-width">
							<input
								type="email"
								name="user_email"
								required
								placeholder="Email Address"
							/>
						</div>
						<div className="form-group full-width">
							<input
								type="text"
								name="subject"
								required
								placeholder="Subject"
							/>
						</div>
						<div className="form-group full-width">
							<textarea
								name="message"
								required
								placeholder="Your message..."
							></textarea>
						</div>
						<button type="submit">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
