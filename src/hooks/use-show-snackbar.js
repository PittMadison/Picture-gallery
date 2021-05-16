import { useSnackbar } from "notistack";
import { useAutoCallback, useAutoMemo } from "hooks.macro";

export const useShowSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbarTypes = useAutoMemo({
    success: "success",
    info: "info",
    delete: "error",
  });

  const showSnackbar = useAutoCallback(
    (message, type = snackbarTypes.success) => {
      const snackbarId = enqueueSnackbar(message, {
        variant: snackbarTypes[type],
        onClick: () => closeSnackbar(snackbarId),
      });
    }
  );

  return {
    showSnackbar,
  };
};
