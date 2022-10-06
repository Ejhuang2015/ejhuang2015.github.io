// Billboard Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import "./style.css";
import { IContactLink } from "../../common/types"
import { contactLinks } from "../../common/navLinks";
import headshot from "../../assets/Edward.jpg"
// import headshot2 from "../../assets/Headshot.jpg"
import emailIcon from "../../assets/email.png";

// Main
// =============================================================
function Billboard() {

  // Functions
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
    <div className="columns centered title reverseRow is-justify-content-center" id="top">
      <header className="column is-5">
        <h1>Edward JieHao Huang</h1>
        <h2>Full Stack Web Developer and Digital Artist</h2>
        <hr />
        <p className="quote">
          Currently employed at Walkin' Pets <br/>
          as a Front End Web Developer and IT Support Technician.<br/>
          Open to new oppurtunities in the Greater Boston MA area.
        </p>
        <hr />
        <div className="singleLine">
          {contactLinks.map(mapContacts)}
          <a href="mailto:ejhuang.2015@gmail.com">
            <img src={emailIcon} alt="Email Link" className="footerIcon"/>
          </a>
        </div>
      </header>
      <div className="column is-3 is-flex is-justify-content-center is-align-items-center">
        <img src={headshot} alt="Headshot of Edward Huang" className="my-auto profilePicture" />
      </div>
    </div>
  )
}

// Exports
// =============================================================
export default Billboard;