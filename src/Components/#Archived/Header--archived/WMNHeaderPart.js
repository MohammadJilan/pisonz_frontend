import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import UserProfileIcon from "./UserProfileIcon";

const WMNHeaderPart = (props) =>{

    const windowHeight = window.screen.height * 1.4;
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width - window.screen.height * 0.07;

    return(
        <div>
            <span className="WMNHeaderPartComponent WMNHeaderPartText" style={{
                marginRight:`${props.Gap * props.Scale}vw`,
                fontSize: `${windowHeight * props.Scale * 0.013}px`,
            }}>RP {props.Balance}</span>

            <span className="WMNHeaderPartComponent WMNHeaderPartText" style={{
                
                marginRight:`${props.Gap * props.Scale}vw`,
                fontSize: `${windowHeight * props.Scale * 0.013}px`,
                fontWeight:"bold",
                
                }}>{props.email}</span>

            <span className="WMNHeaderPartComponent " style={{
                marginRight:`${props.Gap * props.Scale}vw`,
                color:props.IconColor,
                }}>
                <FontAwesomeIcon style={{height:`${windowHeight * props.Scale * 0.013}px`, width:`${windowHeight * props.Scale * 0.013}px`,}} icon={faBell} />
            </span>

            <span className="WNMHeaderPartComponent" style={{
                marginRight:`${props.Gap * props.Scale}vw`,
                position:"relative",
                top:`${windowHeight * 0.003}px`,

                }}>
                <UserProfileIcon Scale={(0.14*props.Scale).toString()} ImageLink="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Ichigo.jpg"/>
            </span>

        </div>
    );
}

WMNHeaderPart.defaultProps = {
    IconColor:"white",
    Scale:"1",
    Gap:"1",
    email:"user01@mail.com",
    Balance:"0",
};

export default WMNHeaderPart;