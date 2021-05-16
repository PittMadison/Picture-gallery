import { useSnackbar } from "notistack";
import { useAutoCallback, useAutoMemo } from "hooks.macro";

export const useShowToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showToastTypes = useAutoMemo({
    success: "success",
    info: "info",
    delete: "error",
  });

  const showToast = useAutoCallback((message, type = showToastTypes.success) =>
    enqueueSnackbar(message, { variant: showToastTypes[type] })
  );

  return {
    showToast,
  };
};
