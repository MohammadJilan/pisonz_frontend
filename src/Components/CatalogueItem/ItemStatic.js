import React, {useState} from "react";
import Image from "./Image";

const Item = (props) =>{


    const [isHover,setHover] = useState(false);

    const baseStyle = {
        backgroundColor:props.Color,
        borderRadius:`${13 * props.Scale}px`,
        height:`${props.Scale * 190}px`,
        width:`${props.Scale * 190}px`,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:`${3 * props.Scale}px`,
        transition:`box-shadow ${props.scale * 0.25}s ease`,
    };

    const hoverStyle = {
        boxShadow:`0vh 0vh ${props.Scale * 27}px rgba(255,255,255,0.5)`,
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
                <Image  ImageLink="https://miro.medium.com/v2/resize:fit:3840/1*p8JE7v9CglqGMKZT3ecEbg.png" IsStatic={true} Scale={`${props.Scale * 1}`}/>
            </span>
            
            <p style={{
                fontSize:`${props.Scale * 10}px`,
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