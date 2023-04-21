import React from "react";
import Bolts from "./../img/nutsnbolts.jpg"

function Header() {
  
  const headerStyles = {
    textAlign: "left",
    padding: 50,
    margin: 10,
    backgroundImage:`url(${Bolts})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 80%",
    color: "#1fc721",
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Boy Boy Inventory</h1>
      </div>
      <br />
    </React.Fragment>
  );
}

export default Header;