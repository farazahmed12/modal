import React from "react";

import "./App.css";

import { Button } from "react-bootstrap";
import ReactSlider from "./Slider.js";

function App() {
  const [modal9Show, setModal9Show] = React.useState(false);
  const [modal10Show, setModal10Show] = React.useState(false);

  return (
    <div className="App">
      <ReactSlider />
    </div>
  );
}

export default App;
