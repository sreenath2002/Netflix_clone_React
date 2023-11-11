import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__topColumn">
                    <h3>Questions? Contact Us.</h3>
                    <ul className="footer__topList">
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className="footer__topColumn">
                    <h3>Help Center</h3>
                    <ul className="footer__topList">
                        <li>Account</li>
                        <li>Media Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div className="footer__topColumn">
                    <h3>Account</h3>
                    <ul className="footer__topList">
                        <li>Redeem Gift Cards</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className="footer__topColumn">
                    <h3>Media Center</h3>
                    <ul className="footer__topList">
                        <li>Buy Gift Cards</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <select className="footer__languageSelect">
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <div className="footer__bottomLinks">
                    <span>Audio and Subtitles</span>
                    <span>Audio Description</span>
                    <span>Careers</span>
                    <span>Gift Cards</span>
                    <span>Legal Notices</span>
                </div>
                <p>&copy; 2023 Netflix Clone by Your Name</p>
            </div>
        </footer>
    );
}

export default Footer;
