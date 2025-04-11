// src/components/ServiceOffering/Accoridan/accordian.jsx
import React, { useState } from "react";
import "./accordian.css";

const Accordion = ({ title, content, customClass = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${customClass}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <button className={`accordion-button underline accordion-button`}>
                    {title}
                </button>
            </div>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                {isOpen && content}
            </div>
        </div>
    );
};

export default Accordion;
