import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
