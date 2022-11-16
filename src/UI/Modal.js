import { Fragment } from "react";
import { ReactDOM } from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      portalElement
    )}
  </Fragment>;
};

export default Modal;
