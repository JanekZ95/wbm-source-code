import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-info">
				<p className="footer-heading">
					Join the Watch Best Movies on our social media to receive a note about new movies
				</p>
			</section>
				<div className="social-icons">
					<Link
						class="social-icon-link facebook"
						to="/"
						target="_blank"
						aria-label="Facebook"
					>
						<BsFacebook />
					</Link>
					<Link
						class="social-icon-link instagram"
						to="/"
						target="_blank"
						aria-label="Instagram"
					>
						<BsInstagram />
					</Link>
					<Link
						class="social-icon-link youtube"
						to="/"
						target="_blank"
						aria-label="Youtube"
					>
						<BsYoutube />
					</Link>
				</div>
            <div className="social-media">
				<small class="website-rights">||  WBM © 2022 ||</small>
			</div>
		</div>
	);
}

export default Footer;
