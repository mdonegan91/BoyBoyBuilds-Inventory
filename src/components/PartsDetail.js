import React from "react";
import PropTypes from "prop-types";

function PartsDetail(props) {

  const buttonStyles = {
    margin: "2px",
    marginLeft: "1%",
    marginRight: "1%",
    sell: {
      marginLeft: "1%",
      marginRight: "1%",
    }
  }

  return (
    <React.Fragment>
      <br />
      <h4>{props.parts.description} Details</h4>
      <h6>Size: {props.parts.size}</h6>
      <h6>Material: {props.parts.material}</h6>
      <h6>Cost: ${props.parts.cost}/unit</h6>
      <h6>Pack Qty: {parseFloat(props.parts.packQuantity).toFixed(2)}</h6>
      <h6>Unity Qty: {props.parts.unityQuantity}</h6>
      <h6>Units sold:{props.parts.partsSold}</h6>
      <br />
      <button onClick={props.onSellOneClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 1 unit</button>
      <button onClick={props.onSellTenClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 10 units</button>
      <br /><br /><br /><br />
      <button style={buttonStyles} onClick={props.onEditClick} className="btn btn-secondary btn-sm">Update Parts Info</button>
    </React.Fragment>
  );
}

PartsDetail.propTypes = {
  parts: PropTypes.object,
  onEditClick: PropTypes.func,
  onSellOneClick: PropTypes.func,
  onSellTenClick: PropTypes.func,
};

export default PartsDetail;