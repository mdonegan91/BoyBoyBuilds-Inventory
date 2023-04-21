import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewPartsForm(props) {

  const updateFormStyles = {
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    input: {
      textAlign: "center",
      marginLeft: "3px",
    },
  }

  function handleNewPartsFormSubmission(event) {
    event.preventDefault();
    props.onNewPartsCreation({
      description: event.target.description.value,
      size: event.target.size.value,
      material: event.target.material.value,
      cost: parseFloat(event.target.cost.value),
      packQuantity: parseFloat(event.target.packQuantity.value).toFixed(2),
      unityQuantity: parseInt(event.target.packQuantity.value) * 130,
      id: v4(),

    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPartsFormSubmission} style={updateFormStyles}>
        <br />
        <h4>Add Parts</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input size="text" name="description" placeholder="Description" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input size="number" name="size" placeholder="Size" style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input size="text" name="material" placeholder="Material" style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input size="number" step="0.01" min="1" name="cost" placeholder="Cost" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input size="number" name="packQuantity" min="1" placeholder="Number of packs" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <button size="submit" className="btn btn-secondary btn-sm">Add to Inventory</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </React.Fragment>
  );
}

NewPartsForm.propTypes = {
  onNewPartsCreation: PropTypes.func
};

export default NewPartsForm;