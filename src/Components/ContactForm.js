import React, { useState } from "react";
import './ContactForm.css';

export default function ContactForm() {
	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
	return (
		<div>
			<form className="form-container">
				<div className="form-group">
					<label htmlFor="name">
						Your Name
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
				</div>
                <div className="form-group">
					<label htmlFor="email">
						Your email
						<input
							type="text"
							id="email"
							email="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>
                <div className="form-group">
					<label htmlFor="Message">
                        Your message
                    	<textarea
							type="text"
							id="message"
							message="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</label>
				</div>
                <button 
					className="btn-contact"
				>
					SEND
				</button>
			</form>
		</div>
	);
}
