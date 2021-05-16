import { useSnackbar } from "notistack";
import { useAutoCallback, useAutoMemo } from "hooks.macro";

export const useShowToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToastTypes = useAutoMemo({
    success: "success",
    info: "info",
    delete: "error",
  });

  const showToast = useAutoCallback(
    (message, type = showToastTypes.success) => {
      const key = enqueueSnackbar(message, {
        variant: showToastTypes[type],
        onClick: () => closeSnackbar(key),
      });
    }
  );

  return {
    showToast,
  };
};
