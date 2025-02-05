import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderSearchBar = (props) =>{
    const windowHeight = window.screen.height * 1.4;
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width * 1.4;

    return(
        

        <div className='HeaderSearchBar_Container'>
            <FontAwesomeIcon icon={faSearch} style={{
                
                color:"white", 
                height:`${windowHeight * props.Scale * 0.0156}px`,
                left:`${windowWidth * props.Scale * 0.009}px`,
                top:`${windowHeight * props.Scale * 0.015}px`,

                }} className = "HeaderSearchBar_Icon"/>
            <input type="text" placeholder='Cari permainan' className='HeaderSearchBar' style={{
                
                padding: `${windowHeight * props.Scale * 0.0107}px ${windowWidth * props.Scale * 0.03}px ${windowHeight * props.Scale * 0.0107}px ${windowWidth * props.Scale * 0.03}px`, /* Padding */
                width: `${windowWidth * props.Scale * 0.1131}px`,
                height: `${windowHeight * props.Scale * 0.025}px`,
                fontSize: `${windowHeight * props.Scale * 0.0146}px`,
                border: `${windowHeight * props.Scale * 0.002}px solid #FFFFFF`,

            }}/>
            
            
        </div>
    );
}

HeaderSearchBar.defaultProps = {
    Scale: "1",
};

export default HeaderSearchBar;