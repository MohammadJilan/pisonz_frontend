import React from "react";
import Item from "../CatalogueItem/Item";
import ItemDisplay from "../CatalogueItem/ItemDisplay";

const ExplorePanel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width:"70%",
        justifyContent:"center",
      }}
    >
      {/* First Flex Element */}
      <span
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "white",
          marginBottom:"30px",
          marginLeft:"2%",
        }}
      >
        Explore
      </span>

      {/* Second Flex Element */}
      <div
        style={{
            flex:1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            placeItems:"center",
        }}
      >
        {/* Grid Items */}
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      <div>
        <ItemDisplay Count={[1,1,1]}/>
      </div>


    </div>
  );
};

export default ExplorePanel;
