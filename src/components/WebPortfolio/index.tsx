// Web Portfolio Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import { IWebPortfolio } from "../../common/types"
import { webProjects } from "../../common/portfolioProjects";

// Main
// =============================================================
function WebPortfolio() {

    // Map Functions
    // =============================================================
    // Portfolio Projects
    function mapPortfolio(item: IWebPortfolio) {
        return (
            <div className="column is-one-quarter card" key={item.id}>
                <div className="card-image">
                    <img className="cardImage" src={item.image}
                        alt={`${item.title} screenshot`} />
                </div>
                <div className="card-header">
                    <p className="card-header-title is-centered">
                        {item.title}
                    </p>
                </div>
                <div className="card-content">
                    <p className="content">
                        {item.body}
                    </p>
                </div>
                <footer className="card-footer">
                    <a href={item.appLink} className="card-footer-item" target="_blank"
                        rel="noreferrer noopener">See the App</a>
                    <a href={item.sourceLink} className="card-footer-item" target="_blank"
                        rel="noreferrer noopener">View the Code</a>
                </footer>
            </div>
        )
    };

    // Render
    // =============================================================
    return (
        <div className="centered" id="webPortfolio">
            <h3 className="sectionTitle">Web Dev Portfolio</h3>
            <div className="columns is-multiline is-centered">
                {webProjects.map(mapPortfolio)}
            </div>
        </div>
    )
}

// Exports
// =============================================================
export default WebPortfolio;