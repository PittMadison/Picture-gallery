import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import { RootContext } from "./root.context";
import { AppToast, PhotoGridPage, PhotoPreviewPage } from "../components";
import { useRootLogic } from "./use-root-logic";

export const Root = memo(() => {
  const value = useRootLogic();

  return (
    <RootContext.Provider value={value}>
      <Switch>
        <Route exact path="/" component={PhotoGridPage} />
        <Route path="/favorites" component={PhotoGridPage} />
        <Route path="/photos/:id" component={PhotoPreviewPage} />
      </Switch>
        <AppToast/>
    </RootContext.Provider>
  );
});
