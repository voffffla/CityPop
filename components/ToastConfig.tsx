import { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';

/**
 * Configuration to toasts to match the color scheme of the app
 */
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: "green", backgroundColor:"#1f2937"}}
      text1Style={{
        fontSize: 17,
        color: "#7c3aed",
      }}
      text2Style={{
        fontSize: 15,
        color: "#a78bfa"
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: "red", backgroundColor:"#1f2937"}}
      text1Style={{
        fontSize: 17,
        color: "#7c3aed",
      }}
      text2Style={{
        fontSize: 15,
        color: "#a78bfa"
      }}
    />
  ),
};