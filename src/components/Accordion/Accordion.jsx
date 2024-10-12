import React, { useState } from "react";
import "./Accordion.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ title, children, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-title-container" onClick={toggleAccordion}>
        <h5 className="accordion-title">{title}</h5>
        <MdKeyboardArrowDown
          className={`accordion-arrow ${isOpen && "rotate"}`}
        />
      </div>
      <div className={`${!isOpen && "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
