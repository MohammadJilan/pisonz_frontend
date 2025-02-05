import React from "react";
import Input from "./Input";
import TicketDisplay from "./TicketDisplay";

const GameDetails = () => {

    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width * 1.4;

    return(
        <div style={{
            marginRight:"8.26vw",
            paddingLeft:"8.26vw",
            display:"flex",
            color:"white",
        }}>
            
            <div className="Body" style={{
                flex:"1",
                display:"flex",
                flexDirection:"row", //0.428 and 1-0.428
            }}>

                <div className="ImageContainer" style={{
                    flex:"0.428",
                    display:"flex",
                }}>

                    <img src="https://th.bing.com/th/id/R.4a6bfe8873a0012570de49c6fca68a0b?rik=BVdJJ7JPak6kOQ&pid=ImgRaw&r=0" style={{
                        width:"35.2vw",
                        minWidth:`${windowWidth * 0.28 * 0.7}px`,
                        height:`${windowHeight * 0.43}px`,
                        objectFit:"cover",
                    }}></img>

                </div>

                <div className="PurchaseDetails" style={{
                    flex:"0.527",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"row",
                }}>

                    <div className="TitleAndDescription" style={{
                        display:"flex",
                        //padding:`0vh ${windowWidth * 0.0347}px`,
                        minWidth:`${windowWidth * 0.28 * 0.4}px`,
                        height:"100%",
                        flex:"1",
                        marginRight:"1vw",
                        justifyContent:"flex-start",
                        flexDirection:"column",
                        marginLeft:"2.2vw",
                    }}>
                        <h1 style={{
                            marginTop:"0px",

                        }}>Mobile Legends</h1>

                        <span style={{
                            textAlign:"justify",
                            fontSize:"13px",
                        }}>Mobile Legends: Bang Bang adalah game mobile MOBA populer yang dikembangkan oleh Moonton. Dalam game ini, dua tim yang terdiri dari lima pemain bertarung secara real-time untuk menghancurkan markas musuh. Setiap pemain memilih hero dengan kemampuan unik dan bekerja sama dengan tim untuk mencapai kemenangan. Game ini menawarkan berbagai hero, pertandingan cepat, kontrol mudah, pembaruan rutin, dan scene esports yang berkembang. Mobile Legends: Bang Bang sangat populer di Asia Tenggara, terutama karena kemudahan aksesnya melalui perangkat mobile.</span>

                        <div style={{
                            marginTop:"4%",
                            display:"flex",
                            flexDirection:"row",
                            gap:"10%",
                            marginBottom:"35px",
                            paddingLeft:"3%"
                        }}>
                            <Input Label="Unique ID" Placeholder="Ex. 5489528"/>
                            <Input Label="Sever ID" Placeholder="Ex. XXX-YYY-ZZZ"/>
                        </div>


                        <div style={{
                            marginBottom:"30px",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                            <span style={{
                                flex:1,
                                paddingLeft:"15px",

                            }}>
                                <TicketDisplay/>
                            </span>
                            
                        </div>

                        <div className="Button" style={{
                            padding:"0 15px",
                        }}>
                            <button style={{
                                width:"100%",
                                backgroundColor: "#2A2A2D", // 100% white background
                                color: "white", // Text color is grey
                                fontSize: "15px", // Font size is 15px
                                fontWeight: "bold", // Bold text
                                padding: "10px 20px", // Adjust padding for better sizing
                                border: "none", // Remove default border
                                borderRadius: "30px", // Highly curved corners
                                cursor: "pointer", // Pointer cursor on hover
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
                            }}>Add to Cart</button>
                        </div>


                    </div>

                </div>
                
            </div>

        </div>
    );
}

GameDetails.defaultProps = {
    Scale:1,
};

export default GameDetails;