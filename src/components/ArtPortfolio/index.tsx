// Web Portfolio Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import { IArtPortfolio } from "../../common/types"
import { artProjects } from "../../common/portfolioProjects";

// Main
// =============================================================
function ArtPortfolio() {

    // Map Functions
    // =============================================================
    // Portfolio Projects
    function mapPortfolio(item: IArtPortfolio) {
        return (
            <div className="column is-one-quarter card" key={item.id}>
                <div className="card-image">
                    <img className="cardImage" src={item.image} alt={`${item.title} illustration`} />
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
                    <a href={item.link} className="card-footer-item" target="_blank"
                        rel="noreferrer noopener">Open in ArtStation</a>
                </footer>
            </div>
        )
    };


    return (
        <div className="centered" id="artPortfolio">
            <h3 className="sectionTitle">Digital Art Portfolio</h3>
            <div className="columns is-multiline is-centered">
                {artProjects.map(mapPortfolio)}
            </div>
        </div>
    )
}

export default ArtPortfolio;