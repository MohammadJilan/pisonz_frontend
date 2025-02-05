import React from "react";

const Category = (props) =>{
    return(
        <span style={{
            width:`${props.Scale * 20}vh`,
            height:`${props.Scale * 5}vh`,
            border:`solid ${props.Color} ${props.Scale * 0.4}vh`,
            borderRadius:`${props.Scale * 20}vh`,
            color:props.Color,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:`${props.Scale * 2}vh`,
            fontWeight:"bold",
        }}>            
        {props.Text}
        </span>
    );
}


Category.defaultProps = {
    Scale:"1",
    Text:"NA",
    Color:"white",
};

export default Category;