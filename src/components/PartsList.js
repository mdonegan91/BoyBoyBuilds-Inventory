import React from "react";
import Parts from "./Parts";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "left",
  // border: "2px solid black"
}

function PartsList(props) {
  return (
    <React.Fragment>
      <Row>
        <div style={listStyles}>
          {props.partsList.map((parts) =>
            <Col md={4} className="mb-4" key={parts.id}>
              <Parts
                whenPartsClicked={props.onPartsSelection}
                description={parts.description}
                size={parts.size}
                material={parts.material}
                cost={parts.cost}
                packQuantity={parseFloat(parts.packQuantity).toFixed(2)}
                unitQuantity={parts.unitQuantity}
                id={parts.id}
              />
            </Col>
          )}
        </div>
      </Row>
    </React.Fragment>
  );
}

PartsList.propTypes = {
  partsList: PropTypes.array,
  onPartsSelection: PropTypes.func,
};

export default PartsList;
