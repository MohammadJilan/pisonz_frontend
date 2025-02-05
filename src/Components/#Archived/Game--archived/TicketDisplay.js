import React from "react";
import Ticket from "./Ticket";

const TicketDisplay = () => {
  // Sample data for rendering tickets (you can replace this with actual data)
  const tickets = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px", // Equal gap between items
        width: "100%",
      }}
    >
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketDisplay;
