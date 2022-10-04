// Billboard Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import { IContactLink } from "../../common/types"
import { contactLinks } from "../../common/navLinks";
import headshot from "../../assets/Headshot.jpg"
import emailIcon from "../../assets/email.png";

// Main
// =============================================================
function Billboard() {

  // Map Functions
  // =============================================================
  // Link Items
  function mapContacts(item: IContactLink) {
    return (
      <a href={item.link} target="_blank" rel="noreferrer noopener" key={item.id}>
        <img src={item.icon} alt={`${item.name} link`} className="footerIcon" />
      </a>
    )
  }

  // Render
  // =============================================================
  return (
    <div className="columns centered title reverseRow" id="top">
      <div className="empty column is-3"></div>
      <header className="column is-4">
        <h1>Edward JieHao Huang</h1>
        <hr />
        <p className="quote">Full Stack Web Developer and Digital Artist</p>
        <hr />
        <div className="singleLine">
          {contactLinks.map(mapContacts)}
          <a href="mailto:ejhuang.2015@gmail.com">
            <img src={emailIcon} alt="Email Link" className="footerIcon"/>
          </a>
        </div>
      </header>
      <div className="column is-4">
        <img src={headshot} alt="Headshot of Edward Huang" id="profilePicture" />
      </div>
    </div>
  )
}

// Exports
// =============================================================
export default Billboard;