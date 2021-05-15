import { memo } from "react";
import c from "classnames";
import { useRootContext } from "../../root/root.context";
import './app-toast.scss';

export const AppToast = memo(() => {
  const { toastMessage, toastEnabled } = useRootContext();
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
