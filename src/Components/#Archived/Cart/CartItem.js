import React from "react";

const CartItem = () => {
    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    const windowWidth = window.screen.width * 1.4;

    return(
        <div className="product-card" style={{
            display:"flex",
            height:"173px",
            alignItems:"center",
            minWidth:"50%",
        }}>
        <img
            className="product-image"
            src="https://th.bing.com/th/id/OIP.EpmAT1ipKzQU41HKPwGtSAHaHa?rs=1&pid=ImgDetMain" // Replace with actual image URL
            alt="Mobile Legend"
            style={{
                width:"140px",
                height:"140px",
                marginRight:"1%",
                
            }}
        />
        <div className="product-details" style={{
            flex:"1",
            display:"flex",
            flexDirection:"column",
            height:"140px",
        }}>
            <div style={{
                //display:"flex",
                flexDirection:"column",
                flex:"3",
            }}>
                <h3 style={{
                    fontSize:"17px",
                    margin:"0px",
                }}>Mobile Legend</h3>

                <p style={{
                    fontSize:"14px",
                    margin:"0px",
                    marginTop:"5px",
                    color:"#BFBBBB",
                }}>Weekly Diamond Pass</p>
            </div>
            
            <div style={{
                flex:"1",
            }}>
            <p style={{
                fontSize:"20px",
                fontWeight:"bold",
                margin:"0px",
            }}>R 10,000</p>
            </div>

        </div>

        <div
        style={{
            height: "140px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "200px",
            margin: "auto",
        }}
        >



            {/* Second Child: Delete Icon */}
            <div className="delete-icon" style={{ 
                alignSelf: "flex-start",
                display:"flex",
                alignSelf:"flex-end"
                 }}>
                <button title="Delete" style={{ background: "none", border: "none", cursor: "pointer",alignSelf:"flex-end"}}>
                🗑️
                </button>
            </div>

            <div className="product-actions" style={{ alignSelf: "flex-end" }}>
                <label htmlFor="quantity">Qty</label>
                <select id="quantity" className="quantity-dropdown">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                {/* Add more options as needed */}
                </select>
            </div>

            </div>


        </div>
    );
}

export default CartItem;