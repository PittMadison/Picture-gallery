import {memo} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Root } from "./root";
import "./App.scss";

export const App = memo(() => {
  return (
    <Router>
        <Root />
    </Router>
  );
});
