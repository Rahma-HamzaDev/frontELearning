import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© {new Date().getFullYear()} E-Learning. Tous droits réservés.</p>
                <p>Développé avec ❤️ par votre équipe.</p>
            </div>
        </footer>
    );
};

export default Footer;
