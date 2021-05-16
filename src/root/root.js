import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import { PhotoGridPage, PhotoPreviewPage } from "../components";

export const Root = memo(() => {

  return (
      <Switch>
        <Route exact path="/" component={PhotoGridPage} />
        <Route path="/favorites" component={PhotoGridPage} />
        <Route path="/photos/:id" component={PhotoPreviewPage} />
      </Switch>
  );
});
