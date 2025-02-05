import React from "react";

const Input = (props) => {
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            color:"white",
        }}>
            <p style={{fontWeight:"bold",marginBottom:"15px",}}>{props.Label}</p>
            <input type="text" placeholder={props.Placeholder} style={{
                all:"unset",
                border:"solid 2px #2A2A2D",
                height:"25px",
                minWidth:"150px",
                width:"10vw",
                backgroundColor:"white",
                borderRadius:"30px",
                paddingLeft:"3%",
                color:"black",
                marginTop:"0px",
                fontSize:"12px",
            }}/>
        </div>
    );
}

Input.defaultProps = {
    Scale:1,
    Label:"MyLabel",
    Placeholder:"Placeholder..."
};

export default Input;