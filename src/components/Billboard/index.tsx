// Billboard Component
// =============================================================

// Dependencies
// =============================================================
import React, {useState} from "react";
import "./style.css";
import { IContactLink } from "../../common/types"
import { contactLinks } from "../../common/navLinks";
import headshot2 from "../../assets/Edward.jpg"
import headshot from "../../assets/Headshot.jpg"
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
      <header className="column is-6">
        <h1>
          <span className="magic">
            <span className="magicText">Edward JieHao Huang</span>
          </span>
        </h1>
        <span className="typewriter">Full Stack Developer and Digital Artist</span>
        <hr/>
        <p className="quote">
          Skilled in creating visually stunning and user-friendly interfaces
          <br/>
          See my unique blend of creative and technical skills.
        </p>
        <hr />
        <div className="singleLine">
          {contactLinks.map(mapContacts)}
          <a href="#contact">
            <img src={emailIcon} alt="Email Link" className="footerIcon"/>
          </a>
        </div>
      </header>
      <div className="column is-4 is-flex is-justify-content-center is-align-items-center">
        <div className="pfpBorder">
          <div className="pfpContent">
            <img src={headshot2} alt="Headshot of Edward Huang" className="my-auto profilePicture" />
            <img src={headshot} alt="Headshot of Edward Huang" className="my-auto profilePicture pfpInit" />
          </div>
        </div>
      </div>
      {/* <iframe src="https://drive.google.com/file/d/16q2MZhZ3RCwJvsU0yipI_twfHVOGhUC9/preview?usp=embed_googleplus" className="embedPDF"></iframe> */}
    </div>
  )
}

// Exports
// =============================================================
export default Billboard;