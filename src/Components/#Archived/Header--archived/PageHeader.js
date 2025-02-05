import React, {useState, useEffect} from "react";
import HeaderSearchBar from './HeaderSearchBar';
import WMNNHeaderPart from './WMNHeaderPart';
import HeaderNavLinks from "./HeaderNavLinks";
import { jwtDecode } from "jwt-decode";


const PageHeader = (props) => {

    const[userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        if(token){
            try{
                setUserInfo(jwtDecode(token));
            }catch(err){
                console.error("invalid token",err);
            }
        }

    },[]);


    const windowHeight = window.screen.height * 1.4;
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width * 1.4;

    return(
        <div style={{
            minWidth:`${windowWidth * 0.6}px`,
            width:"100vw",
            height:`${bodyHeight * 0.145}px`,
            backgroundColor:"#2A2A2D",
            display:"flex",
            flexDirection:"column",
        }}>
            <div style={{
                height:"58%",
                borderBottom:  `solid ${windowHeight * 0.001}px white`,
                marginBottom:"0",
                flexDirection:"row",
                alignItems:"center",
                display:"flex",
                padding:"0vh 1vw 0vh 1vw",
            }}>
                <div style={{
                    minWidth:`${windowWidth * 0.05}px`,
                    width:"3.62vw",
                    display:"inline-block",
                    height:"100%",

                }}>
                    <a href="/" style={{
                        textDecoration: "none",
                        color: "inherit", 
                        background: "none", 
                        border: "none",
                    }}>
                    <img src="https://i.imghippo.com/files/sYY5503UaY.png" style={{
                        height:"85%",
                        width:"85%",
                        paddingTop:`${windowHeight * 0.0098}px`,
                        paddingLeft:`${windowWidth * 0.00353}px`,
                        objectFit:"cover",
                    }}></img>
                    </a>
                </div>

                <div style={{
                    alignContent:"flex-start",
                    display:"inline-block",
                    position:"relative",

                }}>
                    <HeaderSearchBar Scale="0.6"/>
                </div>

                <div style={{ // This is the filler.
                        display:"inline-flex",
                        flex:"1",
                        justifyContent:"flex-end",
                        
                }}>
                    <WMNNHeaderPart email={userInfo?userInfo.email:"loading..."} Balance={userInfo?userInfo.balance:"100"} Gap="2"/>
                </div>
            </div>


            <div style={{
                display:"flex",
                flex:"1",
                paddingLeft:"8.26vw",
                alignItems:"center",
            }}>
                
                <div>
                    <HeaderNavLinks/>
                </div>
            </div>
            
        </div>
    );
}
    

const PageHeaderTCSS = () =>{
    return(
        <div>

        </div>
    );
}

PageHeader.defaultProps = {
    
};

export default PageHeader;