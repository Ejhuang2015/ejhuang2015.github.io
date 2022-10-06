// Contact Component
// =============================================================

// Dependencies
// =============================================================
import React, {useReducer, useState} from "react";
import Modal from '../Modal';
import "./style.css";

// Main
// =============================================================
function Contact() {
    
    // State Management
    // =============================================================
    // Form Data
    const formReducer = (state: any, event: any) => {
        switch(event.type) {
            case "CLEAR_FORM" : 
                return {
                    name: "",
                    email: "",
                    message: ""
                }
            default :
                return {
                    ...state,
                    [event.name]: event.value
                }
        }
    }

    const [formData, setFormData] = useReducer(formReducer, {
        name: "",
        email: "",
        message: ""
    });

    // Submit Disable Toggle
    const [submitState, setSubmit] = useState(false);

    // Contact Modal Toggle
    const [modalState, setModal] = useState(false);
    function handleModal() {
        setModal(!modalState);
    }
    
    // Functions
    // =============================================================
    // Form Inputs
    function handleChange(event: any) {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    // Form Submission AJAX
    function handleSubmit(event: any) {
        event.preventDefault();
        setSubmit(true);

        fetch("https://formsubmit.co/ajax/ejhuang.2015@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            handleModal();
        })
        .catch(error => console.log(error));
    }
    
    // Closes modal
    function closeModal() {
        setFormData({type: "CLEAR_FORM"})
        setSubmit(false);
        setModal(false);
    }

    // Render
    // =============================================================
    return (
        <div className="centered" id="contact">
            <h3 className="sectionTitle mb-6">Contact Me</h3>
            <div className="columns">
                <form className="card column is-three-quarters" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={formData.name || ""} />
                    <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} value={formData.email || ""} />
                    <textarea name="message" placeholder="Message" required onChange={handleChange} value={formData.message || ""} />
                    <button className="button buttonBlue" type="submit" disabled={submitState}>Send</button>
                </form>
            </div>

            <Modal header="Message Sent" 
                body={
                    <p>Thank you for reaching out to me! I'll get back to you as soon as I can.</p>
                }
                state={modalState}
                closeFunc={closeModal}
            />
        </div>
    )
}

export default Contact;