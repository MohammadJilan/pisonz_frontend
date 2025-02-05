import React from "react";

const Image = (props) => {
    return(
        <span>
            <img src={props.ImageLink} style={{

                height:!(props.IsStatic)?`${props.Scale * 19}vh`:"230px",
                width:!(props.IsStatic)?`${props.Scale * 23}vh`:"260px",
                objectFit:"cover",
                borderRadius:!(props.IsStatic)?`${props.Scale * 2}vh`:"10px",

            }}></img>
        </span>
    );
}

Image.defaultProps = {
    Scale:"1",
    ImageLink:"",
    IsStatic:false,

};

export default Image;