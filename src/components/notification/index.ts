import { enqueueSnackbar, closeSnackbar } from "notistack";

let displayed = false;

export function notification(message: string, variant: 'success' | 'error' | 'default' | 'info' | 'warning') {
  if (!displayed) {
    displayed = true;
    closeSnackbar();
    return enqueueSnackbar(message, {
      autoHideDuration: 5000,
      variant,
      onClose: () => {
        displayed = false;
      }
    });
  }
  return null;
}
