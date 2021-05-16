import { memo } from "react";
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  variantInfo: { backgroundColor: "cornflowerblue !important" },
});

export const SnackBarProvider = memo(({ children }) => {
  const { variantInfo } = useStyles();

  return (
    <SnackbarProvider classes={{variantInfo}} maxSnack={3}>
      {children}
    </SnackbarProvider>
  );
});
