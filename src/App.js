import {memo} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { Root } from "./root";
import "./App.scss";

export const App = memo(() => {
  return (
    <Router>
        <SnackbarProvider maxSnack={3}>
        <Root />
        </SnackbarProvider>
    </Router>
  );
});
