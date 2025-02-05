import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faShoppingCart, faGamepad } from '@fortawesome/free-solid-svg-icons';   

const HeaderNavLinks = (props) =>{

    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width - window.screen.height * 0.07;

    return(
        <div>
            <span style={{
                color:props.Color,
                fontWeight:"bold",
                marginRight:`${windowHeight * (0.01 * props.OuterMargin) * props.Scale}px`,
                fontSize:`${windowHeight * props.Scale * 0.013}px`,
            }}>
                <span>
                    <FontAwesomeIcon icon={faSackDollar} style={{
                        color:props.Color,
                        marginRight:`${props.InnerMargin * props.Scale}vh`,
                        height:`${windowHeight * props.Scale * 0.013}px`,
                        width:`${windowHeight * props.Scale * 0.013}px`,
                    }} />
                </span>
                Deposit
            </span>
            
            <span style={{
                color:props.Color,
                fontWeight:"bold",
                marginRight:`${windowHeight * (0.01 * props.OuterMargin) * props.Scale}px`,
                fontSize:`${windowHeight * props.Scale * 0.013}px`,
            }}>
                <span>
                    <FontAwesomeIcon icon={faGamepad} style={{
                        color:props.Color,
                        marginRight:`${props.InnerMargin * props.Scale}vh`,
                        height:`${windowHeight * props.Scale * 0.013}px`,
                        width:`${windowHeight * props.Scale * 0.013}px`,
                    }} />
                </span>
                Permainan
            </span>

            <span style={{
                color:props.Color,
                fontWeight:"bold",
                marginRight:`${windowHeight * (0.01 * props.OuterMargin) * props.Scale}px`,
                fontSize:`${windowHeight * props.Scale * 0.013}px`,
            }}>
                <span>
                    <FontAwesomeIcon icon={faShoppingCart} style={{
                        color:props.Color,
                        marginRight:`${props.InnerMargin * props.Scale}vh`,
                        height:`${windowHeight * props.Scale * 0.013}px`,
                        width:`${windowHeight * props.Scale * 0.013}px`,
                    }} />
                </span>
                <a style={{
                    textDecoration: "none",
                    color: "inherit", 
                    background: "none", 
                    border: "none",
                }} href="/cart">Cart</a>
            </span>

        </div>
    );
}

HeaderNavLinks.defaultProps = {
    Scale:"1",
    Color:"white",
    InnerMargin:"1",
    OuterMargin:"2",
};


export default HeaderNavLinks;