import React from "react";
import ContactInfoItem from "./ContactInfoItem";
import "./ContactSection.css";
import { MdPhone, MdEmail, MdPlace } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function ContactSection() {
	return (
		<div>
			<div className="welcome-container">
				<video src="/watch-best-movie/video/video-2.mp4" autoPlay loop muted />
				<div className="welcome-container-content">
					<h3>Get in touch</h3>
					<h1>CONTACT</h1>
				</div>
				<div className="contact-section-wrapper">
					<div className="left">
						<ContactInfoItem icon={<MdPhone />} text="+ 48 537 669 661" />
						<ContactInfoItem icon={<MdEmail />} text="yannzolnierczyk@gmail.com"/>
						<ContactInfoItem icon={<MdPlace />} text="Bronowice, Kraków"/>
					</div>
					<div className="right">
                        <ContactForm />
                    </div>
				</div>
			</div>
		</div>
	);
}
