import React from "react";
import QuickLinks from "./QuickLinks";

const Footer = () => {

    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width * 1.4;

    return(
        
        <div style={{
            minHeight: `${windowHeight * 0.594}px`,
            minWidth:`${windowWidth * 0.7}px`,
            width:"100vw",
            backgroundColor: "#2A2A2D",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
        }}>

            <div className="body" style={{
                borderBottom:`solid white ${windowHeight * 0.001}px`,
                flex:"1",
                marginTop:`${windowHeight * 0.1176}px`,
                marginRight:"9vw",
                marginLeft:"9vw",
                marginBottom:`${windowHeight * 0.03}px`,
                display:"flex",

            }}>

                <div className="innerBody" style={{
                    flex:"1",
                    marginLeft:"5.56vw",
                    marginRight:"5.56vw",
                    display:"flex",
                    flexDirection:"row",
                }}>


                    <div className="headerLeft" style={{
                        flex:"1",
                        display:"flex",
                        flexDirection:"column",
                    }}>
                        
                        <div style={{
                            flex:"1",
                            //overflow:"hidden",
                        }}>
                            <img src="https://i.imghippo.com/files/sYY5503UaY.png" 
                            style={{
                                objectFit:"cover",
                                height: `${windowHeight * 0.1}px`,
                            }}></img>
                        </div>

                        <div style={{
                            flex:"2.27",
                            minWidth:"100%",
                            overflow:"hidden",
                            fontSize:`${windowHeight * 0.013}px`,
                            color:"white",
                            textAlign:"justify",
                            marginTop:"0vh",
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                        <div style={{
                            flex:"3.73",
                            display:"flex",
                            flexDirection:"column",
                        }}>
                            <div style={{
                                display:"flex",
                                marginTop:`${windowHeight * 0.02}px`,
                                justifyContent:"center",
                                flex:"1",
                                paddingLeft:"7vw",
                                paddingRight:"7vw",
                            }}>
                                <span style={{
                                    flex:"1",
                                    height:`${windowHeight * 0.0013}px`,
                                    minHeight:`${windowHeight * 0.0264}px`,
                                    overflow:"hidden",
                                    justifyContent:"center",
                                    display:"flex",
                                }}>
                                    <img src="https://i.imghippo.com/files/WC7940M.png" style={{
                                        objectFit:"cover",
                                    }}></img>
                                </span>

                                <span style={{
                                    flex:"1",
                                    height:`${windowHeight * 0.0013}px`,
                                    minHeight:`${windowHeight * 0.0264}px`,
                                    overflow:"hidden",
                                    justifyContent:"center",
                                    display:"flex",
                                }}>
                                    <img src="https://i.imghippo.com/files/GgIi8688JRA.png" style={{
                                        objectFit:"cover",
                                    }}></img>
                                </span>

                                <span style={{
                                    flex:"1",
                                    height:`${windowHeight * 0.0013}px`,
                                    minHeight:`${windowHeight * 0.0264}px`,
                                    overflow:"hidden",
                                    justifyContent:"center",
                                    display:"flex",
                                }}>
                                    <img src="https://i.imghippo.com/files/Efs6977LHY.png" style={{
                                        objectFit:"cover",
                                    }}></img>
                                </span>
                                
                            </div>

                        </div>


                    </div>

                    <div className="headerRight" style={{
                        flex:"1.68",
                        display:"flex",
                        flexDirection:"row",
                        padding:`${windowHeight * 0.04}px`,
                    }}>
                        <span style={{
                            flex:"1",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                            <QuickLinks Title="Quick Links" Links={["Login", "Register", "Search", "Deposit", "Permainan", "Cart"]}/>
                        </span>
                        
                        <span style={{
                            flex:"1",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                            <QuickLinks Title="Socials" Links={["Whatsapp", "Instagram", "Tiktok"]}/>
                        </span>

                        <span style={{
                            flex:"1",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                            <QuickLinks Title="Contact Us" Links={["me@mail.com"]}/>
                        </span>
                        
                    </div>

                </div>

            
            </div>

            <span className="CopyrightNotice" style={{
                marginLeft:`${9}vw`,
                marginBottom:"5vh",
                color:"white",
                fontSize:`${windowHeight * 0.015}px`,
            }}>
                © 2024 Pisonz Store. All Rights Reserved.
            </span>

        </div>
    );
}

Footer.defaultProps = {
    Scale: 1,
};

export default Footer;