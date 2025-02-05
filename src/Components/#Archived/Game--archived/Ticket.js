import React from "react";
import { FaTicketAlt } from "react-icons/fa"; // Import ticket icon from react-icons

const Ticket = () => {
  return (
    <div
      style={{
        width: "132px",
        height: "57px",
        backgroundColor: "#2A2A2D",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderRadius:"10px",
      }}
    >
      {/* Top Flexbox: Ticket Icon */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <FaTicketAlt color="white" />
      </div>

      {/* Middle Flexbox: "8,000 points" */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight:"bold",
        }}
      >
        <span style={{ color: "white", fontSize: "15px" }}>8,000 points</span>
      </div>

      {/* Bottom Flexbox: "100,000" */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight:"bold",
        }}
      >
        <span style={{ color: "#065590", fontSize: "10px" }}>100,000</span>
      </div>
    </div>
  );
};

export default Ticket;
