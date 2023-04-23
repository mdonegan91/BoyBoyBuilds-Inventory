import React from "react";
import NewPartsForm from "./NewPartsForm";
import PartsDetail from "./PartsDetail";
import PartsList from "./PartsList";
import UpdatePartsForm from "./UpdatePartsForm";

class PartsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newPartsFormVisible: false,
      updatePartsFormVisible: false,
      mainPartsList: [],
      selectedParts: null,
    };
  }

  handleEditClick = () => {
    this.setState({
      updatePartsFormVisible: true,
    });
  }

  handleClick = () => {
    if (this.state.updatePartsFormVisible) {
      this.setState({
        updatePartsFormVisible: false,
      });
    } else if (this.state.selectedParts != null) {
      this.setState({
        newPartsFormVisible: false,
        selectedParts: null
      });
    } else {
      this.setState(prevState => ({
        newPartsFormVisible: !prevState.newPartsFormVisible,
      }));
    }
  }

  handleAddingNewPartsAfterNewPartsFormSubmission = (newParts) => {
    const updatedMainPartsList = this.state.mainPartsList.concat(newParts);
    this.setState({
      mainPartsList: updatedMainPartsList,
      newPartsFormVisible: false
    });
  }

  handleUpdatingSelectedParts = (id) => {
    const partsThatWasClicked = this.state.mainPartsList.filter(parts => parts.id === id)[0];
    this.setState({
      selectedParts: partsThatWasClicked
    });
  }

  handleUpdatingPartsInList = (editedVersionOfSelectedParts) => {
    const updatedMainPartsList = this.state.mainPartsList
      .filter(parts => parts.id !== this.state.selectedParts.id)
      .concat(editedVersionOfSelectedParts);
    this.setState({
      mainPartsList: updatedMainPartsList,
      updatePartsFormVisible: false,
      selectedParts: null,
    });
  }

  handleSellingSelectedParts = () => {
    const { selectedParts, mainPartsList } = this.state;
    const { unitQuantity, packQuantity, partsSold = 0 } = selectedParts;
    const unitsOfPartsAfterSale = unitQuantity - 1;
    const packsOfPartsAfterSale = packQuantity - 0.01;
    if (unitsOfPartsAfterSale < 0) {
      alert("Not Enough Parts Left For This Sale");
      return;
    }
    const editedVersionOfPartsThatSold = {
      ...selectedParts,
      unitQuantity: unitsOfPartsAfterSale,
      packQuantity: packsOfPartsAfterSale,
      partsSold: partsSold + 1
    };
    const updatedMainPartsList = mainPartsList.map(parts =>
      parts.id === selectedParts.id ? editedVersionOfPartsThatSold : parts
    );
    this.setState({
      mainPartsList: updatedMainPartsList,
      updatePartsFormVisible: false,
      selectedParts: null
    });
  }

  handleSellingTenUnits = () => {
    const { selectedParts, mainPartsList } = this.state;
    const { unitQuantity, packQuantity, partsSold = 0 } = selectedParts;
    const unitsToSell = 10;
    if (unitQuantity < unitsToSell) {
      alert("Not Enough Parts Left For This Sale");
      return;
    }
    const unitsOfPartsAfterSale = unitQuantity - unitsToSell;
    const packsOfPartsAfterSale = packQuantity - (unitsToSell / 100);
    const editedVersionOfPartsThatSold = {
      ...selectedParts,
      unitQuantity: unitsOfPartsAfterSale,
      packQuantity: packsOfPartsAfterSale,
      partsSold: partsSold + unitsToSell
    };
    const updatedMainPartsList = mainPartsList.map(parts =>
      parts.id === selectedParts.id ? editedVersionOfPartsThatSold : parts
    );
    this.setState({
      mainPartsList: updatedMainPartsList,
      updatePartsFormVisible: false,
      selectedParts: null
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.updatePartsFormVisible) {
      currentVisibleState =
        <UpdatePartsForm
          parts={this.state.selectedParts}
          onUpdateFormSubmission={this.handleUpdatingPartsInList}
        />
      buttonText = "Back";
    } else if (this.state.selectedParts != null) {
      currentVisibleState =
        <PartsDetail
          parts={this.state.selectedParts}
          onEditClick={this.handleEditClick}
          onSellClick={this.handleSellingSelectedParts}
          onSellTenUnitsClick={this.handleSellingTenUnits}
        />
      buttonText = "Back to Parts list";
    }
    else if (this.state.newPartsFormVisible) {
      currentVisibleState =
        <NewPartsForm
          onNewPartsCreation={this.handleAddingNewPartsAfterNewPartsFormSubmission}
        />
      buttonText = "Back to Parts List";
    } else {
      currentVisibleState =
        <PartsList
          partsList={this.state.mainPartsList}
          onPartsSelection={this.handleUpdatingSelectedParts}
        />
      buttonText = "Add a New Part";
    }

    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PartsControl;