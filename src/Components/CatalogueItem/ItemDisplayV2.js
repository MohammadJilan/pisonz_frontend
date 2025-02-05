import React from "react";
import Item from "./ItemStatic";
import ItemStatic from "./ItemStatic";

const ItemDisplay = (props) => {
    
    return(
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(4, 1fr)",
            //flexDirection:"row",
            minWidth:`${50 * props.Scale}vw`,
            width:`${80 * props.Scale}vw`,
            //flexWrap:"wrap",
        }}>

                {props.Count.map(
                    (index) => (
                        <span style={{
                            flex:"1",
                            //justifyContent:"flex-start",
                            marginBottom:`${3.43 * props.Scale}vh`,
                        }}>
                            
                            {!(props.IsStatic)?<Item Scale={1.6 * props.Scale} key={index}/>:<ItemStatic Scale={1.6 * props.Scale} key={index}/>}
                        </span>
                )
                )}
            
        </div>
    );
}

ItemDisplay.defaultProps = {
    Scale:1,
    Count:[1,1,1,1],
    IsStatic:false,
};

export default ItemDisplay;