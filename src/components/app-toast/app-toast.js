import { memo, useLayoutEffect } from "react";
import c from "classnames";
import "./app-toast.scss";
import { useBooleanState } from "../../hooks";

export const AppToast = memo(({ toastMessage }) => {
  const [toastEnabled, enableToast, disableToast] = useBooleanState();

  useLayoutEffect(() => {
    setTimeout(() => {
      enableToast();
      setTimeout(() => {
        disableToast();
      }, 2000);
    }, 300);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={c("app-toast", {
        "app-toast--enabled": toastEnabled,
      })}
    >
      {toastMessage}
    </div>
  );
});
