import React from "react";
import Parts from "./Parts";
import PropTypes from "prop-types";

const listStyles = {
  // border: "2px solid black"
}

function PartsList(props) {
  return (
    <React.Fragment>
      <div style={listStyles}>
        <br />
        {props.partsList.map((parts) =>
          <Parts
            whenPartsClicked={props.onPartsSelection}
            description={parts.description}
            size={parts.size}
            material={parts.material}
            cost={parts.cost}
            packQuantity={parseFloat(parts.packQuantity).toFixed(2)}
            unitQuantity={parts.unitQuantity}
            key={parts.id}
            id={parts.id}
          />
        )}
        <br />
      </div>
    </React.Fragment>
  );
}

PartsList.propTypes = {
  partsList: PropTypes.array,
  onPartsSelection: PropTypes.func,
};

export default PartsList;