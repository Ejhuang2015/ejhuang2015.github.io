import React from "react";

function AboutMe() {

    return (
        <div className="centered" id="aboutMe">
          <h3 className="sectionTitle">About</h3>
          <div className="columns is-vcentered">
            <div className="empty column is-1"></div>
            <div className="column is-4 container">
              <header className="about">Bio</header>
              <hr className="smallHR"/>
              <p className="content">
              I am a graduate from University of New Hampshire’s full stack coding bootcamp where I learned technologies ranging from Typescript and React to Express.js and MongoDB and a graduate from Becker College where I studied interactive media design with a focus on digital illustration. Within my experience, I have created many beautiful and functional web applications that are responsive between a variety of devices such as computers, tablets, and mobile phones. I've also been working with multiple e-commerce sites within the pet health and mobility solutions industry, researching and creating intricate web applications to drive new customer sales and boost client retention.
              </p>
            </div>
            <div className="column is-4 container">
              <header className="about">Attributes</header>
              <hr className="smallHR"/>
              <div className="columns about">
                <div className="column is-4">
                  <header className="about underlined">Traits</header>
                  <ul className="noBullets">
                    <li>Well Organized</li>
                    <li>Honest</li>
                    <li>Focused</li>
                  </ul>
                </div>
                <div className="column is-4">
                  <header className="about underlined">Languages</header>
                  <ul className="noBullets">
                    <li>TypeScript</li>
                    <li>C++</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="column is-4">
                  <header className="about underlined">Technologies</header>
                  <ul className="noBullets">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Bootstrap</li>
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