import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";

import pkg from "semantic-ui-react/package.json";
import App from "./App";

const Plot = ({ children }) => (
  <Container style={{ margin: 20 }}>{children}</Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Plot>
    <App />
  </Plot>,
  document.getElementById("root")
);
