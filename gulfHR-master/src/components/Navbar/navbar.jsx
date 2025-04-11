import React, { useState, useEffect } from "react";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./navbar.css";
import i18n from "i18next";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isWhiteText, setIsWhiteText] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setIsScrolled(scrollPosition > 0);
            setLastScrollY(scrollPosition);

            if (location.pathname === "/service-offering" && scrollPosition === 0) {
                setIsWhiteText(true);
            } else {
                setIsWhiteText(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, location.pathname]);

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            setSelectedOption("home");
        } else if (path === "/service-offering") {
            setSelectedOption("service");
        } else if (path === "/contact-us") {
            setSelectedOption("contact");
        }
    }, [location]);

    const { t } = useTranslation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        document.body.classList.toggle("menu-open");
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen((prev) => !prev);
    };

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsLanguageDropdownOpen(false);
    };

    const navbarClasses = `navbar ${
        isScrolled ? "" : "navbar-top"
    } ${isVisible ? "navbar-visible" : "navbar-hidden"} ${
        selectedOption === "service" ? "service-offering-page" : ""
    } ${isWhiteText ? "navbar-white-text" : ""}`;

    const LanguageSelector = ({ isMobile = false }) => (
        <li className={`${isMobile ? 'mobile-menu-item' : 'navbar-item'} language-selector`}>
            <button className="language-button" onClick={toggleLanguageDropdown}>
                <MdLanguage className="navbar-icon"/>
                <span className="language-text">{i18n.language.toUpperCase()}</span>
                <span className="dropdown-icon">&#9662;</span>
            </button>
            {isLanguageDropdownOpen && (
                <ul className={`language-dropdown ${isMobile ? 'mobile-language-dropdown' : ''}`}>
                    <li onClick={() => handleLanguageChange("en")} className="language-dropdown-item">
                        English
                    </li>
                    <li onClick={() => handleLanguageChange("ar")} className="language-dropdown-item">
                        Arabic
                    </li>
                </ul>
            )}
        </li>
    );

    return (
        <nav className={navbarClasses}>
                <div className="block navbar-container-mobile md:hidden">
                    <button className="logo">
                        <img src="/images/Logo.png" alt="gulfHR logo"/>
                    </button>
                    <LanguageSelector isMobile={true} />


                        <div className="navbar-actions mobile-navbar-actions">
                            <Link to="/contact-us" className="book-demo-link">
                                <button className="book-demo-button">
                                    <CiCalendarDate className="book-demo-icon"/>
                                    <span className="book-demo-text">
                                        {Array.from(t("Book a Demo")).map((char, index) => (
                                            <span
                                                key={index}
                                                style={{animationDelay: `${index * 0.05}s`}}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </span>
                                        ))}
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <div className="mobile-menu-button">
                            <button onClick={toggleMobileMenu}>
                                <HiOutlineMenuAlt2 className=""/>
                            </button>
                        </div>

                    <div className={`mobile-menu  ${isMobileMenuOpen ? "open" : ""}`}>
                        <button onClick={toggleMobileMenu} className="mobile-menu-close">
                            &times;
                        </button>
                        <ul className="mobile-menu-links">
                            <li className="mobile-menu-item">
                                <IoHomeOutline className="navbar-icon"/>
                                <Link
                                    to="/"
                                    className={`mobile-navbar-option ${
                                        selectedOption === "home" ? "navbar-option-selected" : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedOption("home");
                                        toggleMobileMenu();
                                    }}
                                >
                                    {t("Home")}
                                </Link>
                            </li>
                            <li className="mobile-menu-item">
                                <IoSettingsOutline className="navbar-icon"/>
                                <Link
                                    to="/service-offering"
                                    className={`mobile-navbar-option ${
                                        selectedOption === "service" ? "navbar-option-selected" : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedOption("service");
                                        toggleMobileMenu();
                                    }}
                                >
                                    {t("Service Offering")}
                                </Link>
                            </li>
                            <li className="mobile-menu-item">
                                <HiMiniDevicePhoneMobile className="navbar-icon"/>
                                <Link
                                    to="/contact-us"
                                    className={`mobile-navbar-option ${
                                        selectedOption === "contact" ? "navbar-option-selected" : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedOption("contact");
                                        toggleMobileMenu();
                                    }}
                                >
                                    {t("Contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden navbar-container md:block">
                    <button className="logo">
                        <img src="/images/Logo.png" alt="gulfHR logo" className="ml-20"/>
                    </button>
                    <ul className="font-semibold navbar-links">
                        <li className="navbar-item" style={{
                                fontFamily: "'Source Sans Pro', sans-serif",
                                fontWeight: 600,
                            }}>
                            <IoHomeOutline className="-mt-2 navbar-icon"/>
                            <Link
                                to="/"
                                className={`navbar-link ${
                                    selectedOption === "home" ? "navbar-option-selected" : ""
                                }`}
                                onClick={() => setSelectedOption("home")}
                            >
                                {t("Home")}
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <IoSettingsOutline className="-mt-2 navbar-icon"/>
                            <Link
                                to="/service-offering"
                                className={`navbar-link ${
                                    selectedOption === "service" ? "navbar-option-selected" : ""
                                }`}
                                onClick={() => setSelectedOption("service")}
                            >
                                {t("Service Offering")}
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <HiMiniDevicePhoneMobile className="-mt-2 navbar-icon"/>
                            <Link
                                to="/contact-us"
                                className={`navbar-link ${
                                    selectedOption === "contact" ? "navbar-option-selected" : ""
                                }`}
                                onClick={() => setSelectedOption("contact")}
                            >
                                {t("Contact")}
                            </Link>
                        </li>
                        <div>
                            <LanguageSelector />
                        </div>
                    </ul>
                    <div className="navbar-actions">
                        <Link to="/contact-us" className="book-demo-link">
                            <button className="mr-16 book-demo-button">
                                <CiCalendarDate className="w-6 h-6 mb-1 mr-2 book-demo-icon"/>
                                <span className="book-demo-text">
                                    {Array.from(t("Book a Demo")).map((char, index) => (
                                        <span
                                            key={index}
                                            style={{animationDelay: `${index * 0.05}s`}}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;