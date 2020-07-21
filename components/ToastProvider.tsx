import * as React from "react";

export enum ToastType {
  Info = "INFO",
  Error = "ERROR",
  Success = "SUCCESS",
}

type ToastSettingsType = { type: ToastType; message: string; duration: number };

type ToastContextType = {
  toastSettings: ToastSettingsType | null;
  showToast: (type: ToastType, message: string, duration?: number) => void;
  hideToast: () => void;
};

export const ToastContext = React.createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC = ({ children }) => {
  const [
    toastSettings,
    setToastSettings,
  ] = React.useState<ToastSettingsType | null>(null);

  function showToast(type: ToastType, message: string, duration = 4000) {
    setToastSettings({ type, message, duration });
  }

  function hideToast() {
    setToastSettings(null);
  }

  return (
    <ToastContext.Provider value={{ toastSettings, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
