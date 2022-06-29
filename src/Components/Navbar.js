import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

function Navbar() {
	const [click, setClick] = useState(false);
	const [showLinks, setShowLinks] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						WBM
						<RiMovie2Fill />
					</Link>
				</div>

				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
                <section>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/movies" className="nav-links" onClick={closeMobileMenu}>
							Movies
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
							About
						</Link>
					</li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
				</ul>
                </section>
			</nav>
		</>
	);
}

export default Navbar;
