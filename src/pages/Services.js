import React, { useState } from "react";
import {
  FaWalking,
  FaShieldAlt,
  FaBrain,
  FaVideo,
  FaDumbbell,
  FaProcedures,
  FaHeartbeat,
  FaHeadSideVirus,
  FaCrutch,
  FaUserInjured,
  FaUserNurse,
  FaAllergies,
} from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";
import "./Services.css";

function Services() {
  const [activeTab, setActiveTab] = useState("services");

  const services = [
    { name: "Balance training", icon: <FaWalking /> },
    { name: "Fall prevention", icon: <FaShieldAlt /> },
    { name: "Vestibular rehab", icon: <FaBrain /> },
    { name: "Telehealth", icon: <FaVideo /> },
    { name: "Parkinson’s boxing class", icon: <GiBoxingGlove /> }, 
    { name: "Older adults strength and conditioning class", icon: <FaDumbbell /> },
  ];

  const conditions = [
    { name: "Stroke", icon: <FaProcedures /> },
    { name: "Parkinson’s disease", icon: <FaHeartbeat /> },
    { name: "Multiple sclerosis", icon: <FaHeadSideVirus /> },
    { name: "Traumatic brain injury", icon: <FaCrutch /> },
    { name: "Spinal cord injury", icon: <FaUserInjured /> },
    { name: "Neuropathy", icon: <FaUserNurse /> },
    { name: "ALS", icon: <FaAllergies /> },
  ];

  const displayedItems = activeTab === "services" ? services : conditions;

  return (
    <div className="services-container">
      <div className="tabs">
        <button
          className={activeTab === "services" ? "active" : ""}
          onClick={() => setActiveTab("services")}
        >
          Services Provided
        </button>
        <button
          className={activeTab === "conditions" ? "active" : ""}
          onClick={() => setActiveTab("conditions")}
        >
          Conditions Treated
        </button>
      </div>

      <div className="services-grid">
        {displayedItems.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
