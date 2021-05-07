// Navigation Bar Component
// =============================================================

// Dependencies
// =============================================================
import React, { useState } from "react";
import "./style.scss";
import { IContactLink, IPortfolioLink } from "../../common/types"
import { contactLinks, portfolioLinks } from "../../common/navLinks";

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
    };

    // Contacts and Links Dropdown Toggle
    const [contactState, setContact] = useState(false);
    function handleContact() {
        setContact(!contactState);
    };

    // Closes all togglable menus
    function closeMenus() {
        setBurger(false);
        setPortfolio(false);
        setContact(false);
    }

    // Map Functions
    // =============================================================
    // Portfolio Link Items
    function mapPortfolio(item: IPortfolioLink) {
        return (
            <a href={item.link} className="navbar-item navLink" onClick={closeMenus}>{item.name}</a>
        )
    };
    // Contact Link Items
    function mapContacts(item: IContactLink) {
        return (
            <a href={item.link} className="navbar-item navLink" onClick={closeMenus} target="_blank" rel="noreferrer noopener">
                <img src={item.icon} alt={`${item.name} icon`} className="smallIcon"/>{item.name}</a>
        )
    }
    

    // Render
    // =============================================================
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* <!-- Logo --> */}
                <a href="./index.html" className="navbar-item">
                    <img src="../../assets/SignatureWide.png" alt="Edward Huang's logo" />
                </a>
                {/* <!-- Burger Menu --> */}
                <button className={burgerState ? "is-active navbar-burger" : "navbar-burger"} onClick={handleBurger} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                {/* <!-- Navigation Links Left Side --> */}
                <div className="navbar-start">
                    {/* <!-- About Me Link --> */}
                    <a href="#aboutMe" className="navbar-item navLink" onClick={closeMenus}>About</a>
                    {/* <!-- Portfolio Dropdown --/> */}
                    <div className="navbar-item has-dropdown" id="navPortfolioHasDropdown">
                        <button className="navbar-link" id="navPortfolio" onClick={handlePortfolio}>Portfolio</button>
                        <div className={portfolioState ? "navbar-dropdown" : "navbar-dropdown invis"} id="navPortfolioDropdown">
                            {portfolioLinks.map(mapPortfolio)}
                        </div>
                    </div>
                </div>
                {/* <!-- Navigation Links Right Side --> */}
                <div className="navbar-end">
                    {/* <!-- Contact Me Dropdown --> */}
                    <div className="navbar-item has-dropdown" id="navContactsHasDropdown">
                        <button className="navbar-link" id="navContacts" onClick={handleContact}>Links and Contact</button>
                        <div className={contactState ? "navbar-dropdown" : "navbar-dropdown invis"} id="navContactsDropdown">
                            {contactLinks.map(mapContacts)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Exports
// =============================================================
export default Navbar;