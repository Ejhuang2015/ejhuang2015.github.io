import React from "react";
import headshot from "../../assets/Headshot.jpg"

function Billboard() {

    return (
        <div className="columns centered title reverseRow" id="top">
        <div className="empty column is-3"></div>
        <header className="column is-4">
          <h1>Edward JieHao Huang</h1>
          <h2>Full Stack Web Developer and Digital Artist</h2>
          <hr/>
          <p className="quote">
            Striving for perfection and a keen eye for detail,<br/>
            I promise that I won't disappoint or fail.<br/>
            A passion for creativity and design,<br/>
            I ensure my work will be divine.
          </p>
          <hr/>
          <div className="singleLine">
              icons
          </div>
        </header>
        <div className="column is-4">
          <img src={headshot} alt="Headshot of Edward Huang" id="profilePicture"/>
        </div>
      </div>
    )
}

export default Billboard;