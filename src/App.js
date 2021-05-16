import { Root } from "./root";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { AppToast } from "./components";
import { RootContext } from "./root/root.context";
import { useRootLogic } from "./root/use-root-logic";
import { useAutoCallback } from "hooks.macro";

export const App = () => {
  const value = useRootLogic();

  const renderToasts = useAutoCallback(() =>
    value.toastList.map(({ toastMessage, toastId }) => (
      <AppToast key={toastId} {...{ toastMessage, toastId }} />
    ))
  );

  return (
    <Router>
      <RootContext.Provider value={value}>
        <Root />
        {renderToasts()}
      </RootContext.Provider>
    </Router>
  );
};
