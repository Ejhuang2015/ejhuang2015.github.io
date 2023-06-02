// Billboard Component
// =============================================================

// Dependencies
// =============================================================
import React, {useState, useEffect} from "react";
import "./style.css";
import { IContactLink } from "../../common/types"
import { contactLinks } from "../../common/navLinks";
import headshot2 from "../../assets/Edward.jpg"
import headshot from "../../assets/Headshot.jpg"
import emailIcon from "../../assets/email.png";

// Main
// =============================================================
function Billboard() {
  // State Management
  // =============================================================
  // Stars Refresh
  const [starState, setStar] = useState(<span></span>);

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

  //Random Number Generator
  function randomize(min: number, max: number) {
    return (
      Math.floor(Math.random() * (max - min + 1)) + min
    )
  }

  useEffect(() => {
    let style:React.CSSProperties;
    setInterval(function() {
      style = { "--star-left": `${randomize(-5, 100)}%`, "--star-top": `${randomize(-10, 70)}%` } as React.CSSProperties;
      setStar(<span></span>)
      setTimeout(() => {
        setStar(<span className="magicStar" style={style}>
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>)
      },0)
  }, 500);
  }, []);

  // Render
  // =============================================================
  return (
    <div className="columns centered title reverseRow is-justify-content-center" id="top">
      <header className="column is-6">
        <h1>
          <span className="magic">
          {starState}
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