import React from 'react';
import PropTypes from 'prop-types';

const UserProfileIcon = (props) => {
    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width - window.screen.height * 0.07;

    return(
        <>
            <img src={props.ImageLink} className='UserProfileIcon' style={{
                height: (windowHeight * 0.1 *(parseFloat(props.Scale))).toString() + "px",
                width:(windowHeight * 0.1 *(parseFloat(props.Scale))).toString() + "px",
                borderRadius: `${50}%`,
                }}></img>
        </>

    );
}

UserProfileIcon.defaultProps = {
    Scale:"1",
    ImageLink:"",
};



export default UserProfileIcon;

