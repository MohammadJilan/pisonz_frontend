import React from "react";
import { FaTicketAlt } from "react-icons/fa"; // Import ticket icon from react-icons

const ProductTicket = ({ tickets, setTicketChosen, ticketChosen }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-5">
            {tickets.map((element, index) => (
                <div className={`h-16 rounded p-1 flex flex-col font-bold hover:bg-[#3c3c40] ${ticketChosen == element.variation_id?"bg-[#3c3c40]":"bg-[#2A2A2D]"}`} onClick={() => setTicketChosen(element.variation_id)}>
                    <FaTicketAlt />
                    <div className="text-[11px] text-center flex-1 mt-1">{element.variation_name}</div>
                    <div className="text-[9px] text-center flex-1 text-[#065590]">IDR {element.variation_price}</div>
                    <div className="hidden">{element.variation_id}</div>
                </div>
            ))}
        </div>
    );
}

export default ProductTicket;