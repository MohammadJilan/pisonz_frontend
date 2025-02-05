import React from "react";
import PropTypes, { array } from 'prop-types';

import Category from "./Category";

const CategoryDisplay = (props) => {
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
        }}>
            {
            (props.Values).map(
                (Value,index) => (
                    <span key={index} style={{
                        marginBottom:`${props.Scale * props.Gap}vh`,
                    }}>
                        <Category Text={Value} Scale = {props.Scale}/>
                    </span>
                )
            )
            }
        </div>
    );
}

CategoryDisplay.defaultProps = {
    Scale:"1",
    Values:[],
    Gap:"5",
};

CategoryDisplay.propTypes = {
    Values:PropTypes.array,
};

export default CategoryDisplay;