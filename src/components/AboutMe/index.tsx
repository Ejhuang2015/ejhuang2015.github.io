import React from "react";

function AboutMe() {

    return (
        <div className="centered" id="aboutMe">
          <h3 className="sectionTitle mb-6">About</h3>
          <div className="columns is-justify-content-center">
            <div className="column is-5 container mx-5">
              <header className="about">Bio</header>
              <hr className="smallHR"/>
              <p className="content">
              A graduate from University of New Hampshire’s full stack coding bootcamp where I learned technologies ranging from Typescript and React to Express.js and MongoDB and a graduate from Becker College where I studied interactive media design with a focus on digital illustration.<br/>
              Within my experience, I have created many beautiful and functional web applications that are responsive, clean, and scalable.<br/>
              I've also been working with multiple e-commerce sites within the pet health and mobility solutions industry, researching and creating intricate web components to drive new customer sales and boost client retention.
              </p>
            </div>
            <div className="column is-5 container mx-5">
              <div className="columns about">
                <div className="column is-4">
                  <header className="about">Traits</header>
                  <hr className="fullHR"/>
                  <div className="columns">
                    <div className="column is-6">
                      <ul className="noBullets">
                        <li>Agile</li>
                        <li>Anylytical</li>
                        <li>Creative</li>
                      </ul>
                    </div>
                    <div className="column is-6">
                      <ul className="noBullets">
                        <li>Focused</li>
                        <li>Passionate</li>
                        <li>Organized</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column is-8">
                  <header className="about">Skills</header>
                  <hr className="fullHR"/>
                  <div className="columns">
                    <div className="column is-4">
                      <ul className="noBullets">
                        <li>Typescript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                      </ul>
                    </div>
                    <div className="column is-4">
                      <ul className="noBullets">
                        <li>e-Commerce</li>
                        <li>SEO</li>
                        <li>SQL</li>
                      </ul>
                    </div>
                    <div className="column is-4">
                      <ul className="noBullets">
                        <li>PHP</li>
                        <li>C#</li>
                        <li>Python</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default AboutMe;