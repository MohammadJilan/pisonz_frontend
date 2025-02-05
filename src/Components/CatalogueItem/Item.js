import React, {useState} from "react";
import Image from "./Image";

const Item = (props) =>{
    const [isHover,setHover] = useState(false);

    const baseStyle = {
        backgroundColor:props.Color,
        borderRadius:`${props.Scale * 2.5}vh`,
        height:`${props.Scale * 25}vh`,
        width:`${props.Scale * 25}vh`,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:`${props.Scale * 0.5}vh`,
        transition:`box-shadow ${props.scale * 0.25}s ease`,
    };

    const hoverStyle = {
        boxShadow:`0vh 0vh ${props.Scale * 3}vh rgba(255,255,255,0.5)`,
    };


    return(
        <div style={
            isHover?{...baseStyle,...hoverStyle}:baseStyle
        }
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        >
            <span style={{
            }}>
                <Image  ImageLink="https://miro.medium.com/v2/resize:fit:3840/1*p8JE7v9CglqGMKZT3ecEbg.png" Scale={`${props.Scale * 1}`}/>
            </span>
            
            <p style={{
                fontSize:`${props.Scale * 1.3}vh`,
                fontWeight:"bold",
            }}>Watcher of Realms</p>

        </div>
    );
}

Item.defaultProps = {
    Scale:1,
    Color:"white",
};

export default Item;