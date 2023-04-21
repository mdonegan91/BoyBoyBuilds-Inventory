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
      <br/>
      <h4>{props.parts.details} Details</h4>
      <h6>Size: {props.parts.size}</h6>
      <h6>Material: {props.parts.material}</h6>
      <h6>Cost: ${props.parts.cost}/unit</h6>
      <h6>Packs: {parseFloat(props.parts.packQuantity).toFixed(2)}</h6>
      <h6>Units: {props.parts.unitQuantity}</h6>
      <h6>Units sold:{props.parts.partsSold}</h6>
      <br/>

      <button onClick={props.onSellClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 1 unit</button>

      <button onClick={props.onSellThreeUnitsClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 3 units</button>

      <button onClick={props.onSellTenUnitsClick} className="btn btn-outline-dark btn-sm" style={buttonStyles.sell}>Sell 10 units</button>

      <br/><br/><br/><br/>

      <button style={buttonStyles} onClick={props.onEditClick} className="btn btn-secondary btn-sm">Update Parts Info</button>
    </React.Fragment>
  );
}

PartsDetail.propTypes = {
  parts: PropTypes.object,
  onEditClick: PropTypes.func,
  onSellClick: PropTypes.func,
  onSellThreeUnitsClick: PropTypes.func,
  onSellTenUnitsClick: PropTypes.func,
};
  
export default PartsDetail;