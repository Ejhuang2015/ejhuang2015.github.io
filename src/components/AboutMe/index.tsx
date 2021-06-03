import React from "react";

function AboutMe() {

    return (
        <div className="centered" id="aboutMe">
          <h3 className="sectionTitle">About</h3>
          <div className="columns is-vcentered">
            <div className="empty column is-1"></div>
            <div className="column is-5 container">
              <header className="about">Bio</header>
              <hr className="smallHR"/>
              <p className="content">
                An aspiring full stack web developer with strong interests in design and Asian media.<br/>
                Passionate about video games and Japanese culture with a desire to one day move to Japan and work for closely with Nintendo.<br/>
                RPG styled games where customization is plentiful are what I enjoy the most but my favorite series is Fire Emblem.<br/>
                I love comedies and fantasy, prefer cute and fluffy, and am an absolute coward when it comes to horror.
              </p>
            </div>
            <div className="column is-5 container">
              <header className="about">Attributes</header>
              <hr className="smallHR"/>
              <div className="columns about">
                <div className="column is-4">
                  <header className="about underlined">Traits</header>
                  <ul>
                    <li>Well Organized</li>
                    <li>Honest</li>
                    <li>Team-Oriented</li>
                  </ul>
                </div>
                <div className="column is-4">
                  <header className="about underlined">Languages</header>
                  <ul>
                    <li>TypeScript</li>
                    <li>C++</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="column is-4">
                  <header className="about underlined">Technologies</header>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Adobe Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="empty column is-1"></div>
          </div>
        </div>
    )
}

export default AboutMe;