import React from "react";
import '../../App.css';
import ContactSection from "../ContactSection";
import Footer from "../Footer";

function Contact() {
    return (
        <div>
            <div className="container">
                <ContactSection />
                <Footer />
            </div>
        </div>
    )
}

export default Contact;