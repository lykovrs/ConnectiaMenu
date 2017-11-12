import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";
if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
