// Modal Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import "./style.css";

// Interface
// =============================================================
interface IModalProps {
    header: JSX.Element | string,
    body: JSX.Element | string,
    state: boolean,
    closeFunc: () => void,
}

// Main
// =============================================================
function Modal(props: IModalProps) {
    // Render
    // =============================================================
    return (
        <div className={props.state ? "modal is-active" : "modal"}>
            <div className="modal-background" onClick={props.closeFunc}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.header}</p>
                    <button className="delete modalClose" onClick={props.closeFunc} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    {props.body}
                </section>
            </div>
        </div>
    )
}

// Exports
// =============================================================
export default Modal;