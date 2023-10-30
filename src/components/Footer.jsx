import React from "react";
import FooterCss from "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer container">
            <ul className="links">
                <li className="link">
                    <a href="https://www.facebook.com/yisaaaa/" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </a>
                </li>
                <li className="link">
                    <a href="https://github.com/Yisaaaa" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </li>
                <li className="link">
                    <a href="">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p className="footer-text">Copyright © 2023. Yisa.dev</p>
        </footer>
    );
}
