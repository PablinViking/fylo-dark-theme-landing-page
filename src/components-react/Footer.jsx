import logoImg from "../assets/images/logo.svg";
import locationIcon from '../assets/images/icon-location.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <img
                    className="footer__logoImg"
                    src={logoImg}
                    alt=""
                />
                <div className="footer__g-container">
                    <address className="footer__address">
                        <div className="footer__addr-item footer__addr-item--location">
                            <img
                                className="footer__addr-icon footer__addr-icon--location"
                                src={locationIcon}
                                alt=""
                            />
                            <p className="footer__addr-info footer__addr-info--location">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua
                            </p>
                        </div>
                        <div className="footer__phone-email-container">
                            <div className="footer__addr-item footer__addr-item--phone">
                                <img
                                    className="footer__addr-icon"
                                    src={phoneIcon}
                                    alt=""
                                />
                                <p className="footer__addr-info">+1-543-123-4567</p>
                            </div>
                            <div className="footer__addr-item footer__addr-item--email">
                                <img
                                    className="footer__addr-icon"
                                    src={emailIcon}
                                    alt=""
                                />
                                <p className="footer__addr-info">example@fylo.com</p>
                            </div>
                        </div>
                    </address>
                    <nav
                        className="footer__nav-container"
                        aria-label="Company"
                    >
                        <ul className="footer__links">
                            <li className="footer__item">
                                <a className="footer__link" href="#">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Jobs</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Press</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className="footer__nav-container"
                        aria-label="Legal & support"
                    >
                        <ul className="footer__links">
                            <li className="footer__item">
                                <a className="footer__link" href="#">Contact Us</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Terms</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Privacy</a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className="footer__nav-container-social"
                        aria-label="Social media"
                    >
                        <ul className="footer__links-social">
                            <li className="footer__item-social">
                                <a
                                    className="footer__link-social"
                                    href="#"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF aria-hidden="true" />
                                </a>
                            </li>
                            <li className="footer__item-social">
                                <a
                                    className="footer__link-social"
                                    href="#"
                                    aria-label="X (Twitter)"
                                >
                                    <FaXTwitter aria-hidden="true" />
                                </a>
                            </li>
                            <li className="footer__item-social">
                                <a
                                    className="footer__link-social"
                                    href="#"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
