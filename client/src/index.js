import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App.js";
import "./index.styles.scss";
import { Provider } from "react-redux";
import store from "./js/redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
