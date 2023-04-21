import React from "react";
import PropTypes from "prop-types";

function Parts(props) {

  const linkStyles = {
    textDecoration: "underline",
    color: "grey",
    fontSize: "small",
  }

  return (
    <React.Fragment>
      <h4>{props.description}</h4>
      <h6>Size: {props.size}</h6>
      <h6>Material: {props.material}</h6>
      <h6>Available units: {props.unitQuantity}</h6>
      <p style={linkStyles} onClick={() => props.whenPartsClicked(props.id)}>Details</p>
      <br />
    </React.Fragment>
  );
}

Parts.propTypes = {
  description: PropTypes.string,
  size: PropTypes.string,
  material: PropTypes.string,
  packQuantity: PropTypes.string,
  unitQuantity: PropTypes.number,
  id: PropTypes.string,
  whenPartsClicked: PropTypes.func,
}

export default Parts;