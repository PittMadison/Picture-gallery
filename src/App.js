import { Root } from "./root";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};
