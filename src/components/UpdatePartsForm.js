import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function UpdatePartsForm(props) {

  const updateFormStyles = {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    input: {
      textAlign: "center",
      marginLeft: "3px",
    },
  }

  return (
    <React.Fragment>
      <form style={updateFormStyles} onSubmit={handleUpdatePartsFormSubmission}>
        <br />
        <h4>{props.parts.description}: Update Information</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder={props.parts.description} style={updateFormStyles.input} required />
              </td>
            </tr>
            <tr>
            <td>
                <label htmlFor="size">Size</label>
                <input type="text" name="size" placeholder={props.parts.size} style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="material">Material</label>
                <input type="text" name="material" placeholder={props.parts.material} style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cost">Cost</label>
                <input type="number" step="0.01" min="1" name="cost" placeholder={props.parts.cost} style={updateFormStyles.input} required />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="packQuantity">Crates</label>
                <input type="number" name="packQuantity" min="1" placeholder={props.parts.packQuantity} style={updateFormStyles.input} required />
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