import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";


function NewPartsForm(props) {

  const updateFormStyles = {
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
    input: {
      textAlign: "center",
      marginLeft: "3px",
      color: "white",
      backgroundColor: "black",
      border: "none",
    },
  };

  function handleNewPartsFormSubmission(event) {
    event.preventDefault();
    props.onNewPartsCreation({
      description: event.target.description.value,
      size: event.target.size.value,
      material: event.target.material.value,
      cost: parseFloat(event.target.cost.value),
      packQuantity: parseFloat(event.target.packQuantity.value).toFixed(2),
      unitQuantity: parseInt(event.target.packQuantity.value) * 100,
      id: v4(),

    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPartsFormSubmission} style={updateFormStyles} className="new-parts-form">
        <br />
        <h4>Add Parts</h4>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input type="text" name="description" placeholder="Parts Description" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="size" placeholder="Size" style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" name="material" placeholder="Material" style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" step="0.01" name="cost" placeholder="Cost per unit" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="packQuantity" min="1" placeholder="Number of Packs" required style={updateFormStyles.input} />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit" className="btn btn-secondary btn-sm">Add to Inventory</button>
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