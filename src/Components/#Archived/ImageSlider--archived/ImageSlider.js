import React,{ useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import ImageComp from "./Image";

const ImageSlider = (props) => {
    
    const scrollContainer = useRef(null);
    
    const windowHeight = window.screen.height * 1.4; 
    const bodyHeight = windowHeight - (window.screen.height * 0.145);
    
    const windowWidth = window.screen.width * 1.4;


    const scrollRight = () => {
        const container = scrollContainer.current;
        const scrollAmount = window.innerWidth * 0.18 * props.Scale; // 20vh in pixels.
        
        // Get the current scroll position
        const newScrollPosition = container.scrollLeft + scrollAmount;
    
        // Scroll smoothly to the new position
        container.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });

      };
     
      useEffect(() => {
        // Set up an interval to scroll to the right every 2 seconds
        const intervalId = setInterval(scrollRight, props.Time * 1000);
    
        // Cleanup: clear the interval when the component unmounts
        return () => {
          clearInterval(intervalId);
        };
      }, []);


    const handleScroll = () =>{
        const container = scrollContainer.current;

        if(container.scrollLeft + container.offsetWidth + 5 >= container.scrollWidth){
            container.scrollLeft = 0;
            
        }
    };


    useEffect(()=>{
        const container = scrollContainer.current;

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }
        ,[]);
    
    return(
        <div className="hideMyScrollBar" ref={scrollContainer} style={{
            overflowX:"scroll",
            width:`${props.Scale * windowWidth * 0.01 * (props.Scale * (props.unKnownFactor + props.AddWidth))}px`,
            //width:`${(props.AddWidth + 72) * props.Scale}vw`,
            display:"flex",
            padding:`${windowHeight * props.Scale * 0.02}px ${windowWidth * props.Scale * 0.00904}px ${windowHeight * props.Scale * 0.02}px ${windowWidth * props.Scale * 0.00904}px`,
            scrollSnapType:"x mandatory",
            marginLeft:`${windowWidth * 0.01 * (props.OffSetMargin?-15.83 * props.Scale:0)}px`,
        }}>
            {props.Images.map(
              (Image, index) => (
                <span key={index} style={{
                    marginRight:`${windowWidth * 0.01 *(props.Scale * props.Gap/2)}px`,
                    marginLeft:`${windowWidth * 0.01 * (props.Scale * props.Gap/2)}px`,
    
                }}>
                    <ImageComp ImageLink={Image} Scale={props.Scale} Radius={props.Radius * props.Scale}/>
                </span>
            ) 
            )}

            {props.Images.map(
              (Image, index) => (
                <span key={index} style={{
                    marginRight:`${windowWidth * 0.01 *(props.Scale * props.Gap/2)}px`,
                    marginLeft:`${windowWidth * 0.01 * (props.Scale * props.Gap/2)}px`,
    
                }}>
                    <ImageComp ImageLink={Image} Scale={props.Scale} Radius={props.Radius  * props.Scale}/>
                </span>
            ) 
            )}

            {props.Images.map(
              (Image, index) => (
                <span key={index} style={{
                    marginRight:`${windowWidth * 0.01 *(props.Scale * props.Gap/2)}px`,
                    marginLeft:`${windowWidth * 0.01 * (props.Scale * props.Gap/2)}px`,
    
                }}>
                    <ImageComp ImageLink={Image} Scale={props.Scale} Radius={props.Radius * props.Scale}/>
                </span>
            ) 
            )}

            
        </div>
    );
}

ImageSlider.defaultProps = {
    Scale:1,
    Images:[],
    Gap:"2.8",
    Time:"5",
    AddWidth:0,
    OffSetMargin:true,
    Radius:0.8,
    unKnownFactor:72,
};
   
ImageSlider.propTypes = {
    Images:PropTypes.array,
};

export default ImageSlider;