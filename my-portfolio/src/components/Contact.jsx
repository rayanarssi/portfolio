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
			<div className="contact-info">
				<h3>Let's work together</h3>
				<p>
					I'm currently looking for a stage opportunity where I can apply and
					grow my skills in web development. I'm always excited about new
					opportunities and projects, so whether you have an internship position
					available or just want to chat about web development, feel free to
					reach out.
				</p>
				<div className="contact-details">
					<div className="detail-item">
						<img src="/assets/email-icon.png" alt="Email Icon" />
						<p>
							Email
							<br />
							rayan.arssi@student.ehb.be
						</p>
					</div>
					<div className="detail-item">
						<img src="/assets/phone-icon.png" alt="Phone Icon" />
						<p>
							Phone
							<br />
							+32 465 56 98 96
						</p>
					</div>
					<div className="detail-item">
						<img src="/assets/location-icon.png" alt="Location Icon" />
						<p>
							Location
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
						<label>First Name</label>
						<input type="text" name="first_name" required />
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input type="text" name="last_name" required />
					</div>
					<div className="form-group full-width">
						<label>Email Address</label>
						<input type="email" name="user_email" required />
					</div>
					<div className="form-group full-width">
						<label>Subject</label>
						<input type="text" name="subject" required />
					</div>
					<div className="form-group full-width">
						<label>Your message...</label>
						<textarea name="message" required></textarea>
					</div>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
