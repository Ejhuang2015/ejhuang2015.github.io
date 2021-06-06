// Web Portfolio Component
// =============================================================

// Dependencies
// =============================================================
import React, { useState } from "react";
import Modal from '../Modal';
import { IArtPortfolio } from "../../common/types"
import { artProjects } from "../../common/portfolioProjects";

// Main
// =============================================================
function ArtPortfolio() {
    // State Management
    // =============================================================
    // Modal Toggle
    const [modalState, setModal] = useState(false);
    // Modal Image
    const [modalImageState, setModalImage] = useState({src:"", title:""});
    function handleModal(src: string, title: string) {
        setModal(!modalState);
        const image = {src, title}
        setModalImage(image);

    }
    // Closes modal
    function closeModal() {
        setModal(false);
    }

    // Map Functions
    // =============================================================
    // Portfolio Projects
    function mapPortfolio(item: IArtPortfolio) {
        return (
            <div className="column is-one-quarter card" key={item.id}>
                <div className="card-image level">
                    <img className="cardImage illustration" onClick={() => handleModal(item.image, item.title)} src={item.image} alt={`${item.title} illustration`} />
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

    // Render
    // =============================================================
    return (
        <div>
            <div className="centered" id="artPortfolio">
                <h3 className="sectionTitle">Digital Art Portfolio</h3>
                <div className="columns is-multiline is-centered">
                    {artProjects.map(mapPortfolio)}
                </div>
            </div>

            <Modal header= {modalImageState.title}
                body={
                    <img src={modalImageState.src} alt={`${modalImageState.title} illustration`} />
                }
                state={modalState}
                closeFunc={closeModal}
            />
        </div>
    )
}

export default ArtPortfolio;