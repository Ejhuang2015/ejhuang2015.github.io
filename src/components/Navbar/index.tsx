// Navigation Bar Component
// =============================================================

// Dependencies
// =============================================================
import React, { useState, useRef } from "react";
import useOnClickOutside from '../../utils/clickOutside';
import "./style.css";
import { IContactLink, IPortfolioLink } from "../../common/types"
import { contactLinks, portfolioLinks } from "../../common/navLinks";
import logo from "../../assets/SignatureWide.png";

// Main
// =============================================================
function Navbar() {
    // State Management
    // =============================================================
    // Burger Menu Toggle (Mobile)
    const [burgerState, setBurger] = useState(false);
    function handleBurger() {
        setBurger(!burgerState);
    };

    // Portfolio Dropdown Toggle 
    const [portfolioState, setPortfolio] = useState(false);
    function handlePortfolio() {
        setPortfolio(!portfolioState);
        setContact(false);
    };

    // Contacts and Links Dropdown Toggle
    const [contactState, setContact] = useState(false);
    function handleContact() {
        setContact(!contactState);
        setPortfolio(false);
    };

    // Functions
    // =============================================================
    // Closes all togglable menus
    function closeMenus() {
        setBurger(false);
        setPortfolio(false);
        setContact(false);
    }

    // Close menus on click outside of navbar
    const navRef = useRef(null)
    useOnClickOutside(navRef, closeMenus)

    // Map Functions
    // =============================================================
    // Portfolio Link Items
    function mapPortfolio(item: IPortfolioLink) {
        return (
            <a href={item.link} className="navbar-item navLink" onClick={closeMenus} key={item.id}>
                {item.name}
            </a>
        )
    };
    // Contact Link Items
    function mapContacts(item: IContactLink) {
        return (
            <a href={item.link} className="navbar-item navLink" onClick={closeMenus} key={item.id} target="_blank" rel="noreferrer noopener">
                <img src={item.icon} alt={`${item.name} icon`} className="smallIcon" />{item.name}
            </a>
        )
    }

    // Render
    // =============================================================
    return (
        <div>
            {/* Navbar */}
            <nav ref={navRef} className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* <!-- Logo --> */}
                    <a href="./" className="navbar-item borderClean">
                        <img src={logo} alt="Edward Huang's logo" />
                    </a>
                    {/* <!-- Burger Menu --> */}
                    <button type="button" className={burgerState ? "is-active navbar-burger" : "navbar-burger"} onClick={handleBurger} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarMenu" className={burgerState ? "navbar-menu is-active" : "navbar-menu"}>
                    {/* <!-- Navigation Links Left Side --> */}
                    <div className="navbar-start">
                        {/* <!-- About Me Link --> */}
                        <a href="#aboutMe" className="navbar-item navLink" onClick={closeMenus}>About</a>
                        {/* <!-- Portfolio Dropdown --/> */}
                        <div className={portfolioState ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"} id="navPortfolioHasDropdown">
                            <button type="button" className="navbar-link" id="navPortfolio" onClick={handlePortfolio}>Portfolio</button>
                            <div className={portfolioState ? "navbar-dropdown" : "navbar-dropdown invis"} id="navPortfolioDropdown">
                                {portfolioLinks.map(mapPortfolio)}
                            </div>
                        </div>
                        {/* <!-- Contact Me Link --> */}
                        <a href="#contact" className="navbar-item navLink" onClick={closeMenus}>Contact Me</a>
                    </div>
                    {/* <!-- Navigation Links Right Side --> */}
                    <div className="navbar-end">
                        {/* <!-- Contact Me Dropdown --> */}
                        <div className={contactState ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"} id="navContactsHasDropdown">
                            <button type="button" className="navbar-link" id="navContacts" onClick={handleContact}>External Links</button>
                            <div className={contactState ? "navbar-dropdown" : "navbar-dropdown invis"} id="navContactsDropdown">
                                {contactLinks.map(mapContacts)}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

// Exports
// =============================================================
export default Navbar;