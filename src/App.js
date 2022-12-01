import React from "react";

import "./App.css";

import Modal9 from "./Modal9.js";
import Modal10 from "./Modal10";
import { Button } from "react-bootstrap";

function App() {
  const [modal9Show, setModal9Show] = React.useState(false);
  const [modal10Show, setModal10Show] = React.useState(false);

  return (
    <div className="App">
      {/* Modal 9 with its Button */}
      <Modal9 show={modal9Show} onHide={() => setModal9Show(false)} />
      <Button variant="primary" onClick={() => setModal9Show(true)}>
        modal 9
      </Button>

      {/* Modal 9 with its Button */}

      <Button variant="primary" onClick={() => setModal10Show(true)}>
        Modal10
      </Button>
      <Modal10 show={modal10Show} onHide={() => setModal10Show(false)} />

      {/* New User Modal 
      <NewUser />

       New Table Modal 
      <NewTable /> */}
    </div>
  );
}

export default App;
