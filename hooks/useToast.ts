import * as React from "react";
import { ToastContext } from "../components/ToastProvider";

export function useToast() {
  return React.useContext(ToastContext)!;
}
