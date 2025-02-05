import React from "react";
import PropTypes from 'prop-types';

const Image = (props) => {
    return(
        <span>
            <img src={props.ImageLink} style={{

                width:`${props.Scale * 30}vw`,
                height:`${props.Scale * 22}vh`,
                objectFit:"cover",
                borderRadius:`${props.Scale * props.Radius}vh`,

            }}></img>
        </span>
    );
}

Image.defaultProps = {
    Scale:1,
    ImageLink:"",
    Radius:1.65,
};

export default Image;
