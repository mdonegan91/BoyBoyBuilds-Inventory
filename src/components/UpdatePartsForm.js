import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function UpdatePartsForm(props) {
  const inputStyles = {
    textAlign: "center",
    marginLeft: "3px",
    color: "white",
    backgroundColor: "black",
    border: "none",
  };

  const updateFormStyles = {
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
  };

  const labelStyles = {
    color: "white"
  };

  return (
    <React.Fragment>
      <form style={updateFormStyles} onSubmit={handleUpdatePartsFormSubmission}>
        <br />
        <h4>{props.parts.description}: Update Information</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="description" style={labelStyles}>Description</label>
                <input type="text" name="description" placeholder={props.parts.description} style={inputStyles} required />
              </td>
            </tr>
            <tr>
            <td>
                <label htmlFor="size" style={labelStyles}>Size</label>
                <input type="text" name="size" placeholder={props.parts.size} style={inputStyles} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="material" style={labelStyles}>Material</label>
                <input type="text" name="material" placeholder={props.parts.material} style={inputStyles} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cost" style={labelStyles}>Cost</label>
                <input type="number" step="0.01" min=".01" name="cost" placeholder={props.parts.cost} style={inputStyles} required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="packQuantity" style={labelStyles}>Crates</label>
                <input type="number" name="packQuantity" min="1" placeholder={props.parts.packQuantity} style={inputStyles} required />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" className="btn btn-secondary btn-sm">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );

  function handleUpdatePartsFormSubmission(event) {
    event.preventDefault();
    props.onUpdateFormSubmission({
      description: event.target.description.value,
      size: event.target.size.value,
      material: event.target.material.value,
      cost: parseFloat(event.target.cost.value),
      packQuantity: parseFloat(event.target.packQuantity.value).toFixed(2),
      unityQuantity: parseInt(event.target.packQuantity.value) * 130,
      id: v4(),
    });
  }
};

UpdatePartsForm.propTypes = {
  parts: PropTypes.object,
  onUpdateFormSubmission: PropTypes.func,
};

export default UpdatePartsForm;
