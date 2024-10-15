import { Fragment, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  children: ReactNode;
};

export const ToasttifyProvider = ({ children }: Props) => {
  return (
    <Fragment>
      <ToastContainer />
      {children}
    </Fragment>
  );
};
