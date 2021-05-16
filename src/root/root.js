import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import { PhotoGridPage, PhotoPreviewPage } from "../components";
import { useRootLogic } from "./use-root-logic";
import { RootContext } from "./root.context";

export const Root = memo(() => {
  const value = useRootLogic();

  return (
    <RootContext.Provider value={value}>
      <Switch>
        <Route exact path="/" component={PhotoGridPage} />
        <Route path="/favorites" component={PhotoGridPage} />
        <Route path="/photos/:id" component={PhotoPreviewPage} />
      </Switch>
    </RootContext.Provider>
  );
});
