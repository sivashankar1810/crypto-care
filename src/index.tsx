import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import App from "./App";
// import Store from "./components/api/Store";
import Store from "./components/redux/Store";
import "antd/dist/antd.css";
import "ant-design-draggable-modal/dist/index.css";

import UserProvider from "./components/user/UserContext";
ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
