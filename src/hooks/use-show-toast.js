import { useSnackbar } from "notistack";
import { useAutoCallback } from "hooks.macro";

export const useShowToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showToast = useAutoCallback((message) =>
    enqueueSnackbar(message, { variant: "info" })
  );

  return {
    showToast,
  };
};
