import React from "react";

const QuickLinks = (props) => {
    const fontColor = "white"; // Variable to conviniently change font color.

    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);


    return(
        <div style={{
            color:fontColor,
            display:"flex",
            flexDirection:"column",
            fontSize:`${windowHeight * props.Scale * 0.013}px`,
        }}>
            <span className="Title" style={{
                fontWeight:"bold",
                marginBottom:`${windowHeight * props.Scale * (props.Gap * 0.0085)}px`,
            }}>
                {props.Title}
            </span>

            {props.Links.map(
                (item, index) => (

                    <span key={index} className="Title" style={{
                        marginBottom:`${windowHeight * props.Scale * (props.Gap * 0.0085)}px`,
                    }}>
                        {item}
                    </span>
                )
            )}

        </div>
    );
}

QuickLinks.defaultProps = {
    Scale: 1,
    Title:"Title",
    Links:["link1", "link2"],
    Gap:3.33,
}

export default QuickLinks
