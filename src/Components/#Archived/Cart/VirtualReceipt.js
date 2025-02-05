import React from "react";

const VirtualReceipt = (props) => {
    return(
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "400px",
            margin: "auto",
            padding: "20px",
            //boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            //backgroundColor: "#f9f9f9",
        }}
        >
        {/* Order Summary */}
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>Order Summary</div>

        {/* Items Total */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "15px",
            }}
        >
            <span style={{ fontWeight: "bold" }}>Items Total</span>
            <span>R7000</span>
        </div>

        {/* Horizontal Line */}
        <hr style={{ width: "100%", border: "0.5px solid #ddd" }} />

        {/* Total */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "15px",
            }}
        >
            <span style={{ fontWeight: "bold" }}>Total</span>
            <span>R7000</span>
        </div>

        {/* Spacing */}
        <div style={{ height: `${props.Gap * props.GapMultiplier}px` }}></div>

        {/* Button */}
        <button
            style={{
            width: "100%",
            padding: "15px 0",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#2A2A2D",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            textAlign: "center",
            }}
        >
            Lanjutkan ke pembayaran
        </button>
        </div>
    );
}

VirtualReceipt.defaultProps = {
    Scale:1,
    Gap:100,
    GapMultiplier:1,
};

export default VirtualReceipt;