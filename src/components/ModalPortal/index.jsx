import * as React from "react";
import ReactDOM from "react-dom";

import { SEPCIAL_CONTAINER_ID_LIST } from "configs/config";

const ModalPortal = ({ children } ) => {
  const element = document.getElementById(SEPCIAL_CONTAINER_ID_LIST.MODAL);
  if (element) {
    return ReactDOM.createPortal(children, element);
  } else return null;
};

export default ModalPortal;
