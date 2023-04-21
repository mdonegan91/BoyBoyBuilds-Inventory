import React from "react";
import Header from "./Header";
import PartsControl from "./PartsControl";
// import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      {/* <Container> */}
        <Header />
        <PartsControl />
      {/* </Container> */}
    </React.Fragment>
  );
}

export default App;
