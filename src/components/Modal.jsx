import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import "./Modal.css";

export default function Modal({ isVisible, setIsVisible, title, children }) {
  const modalContainerRef = useRef();
  useOnClickOutside(modalContainerRef, () => setIsVisible(false));

  /* disable background scrolling */
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal"
        >
          <motion.div
            transition={{ duration: 0.2 }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            ref={modalContainerRef}
            className="modal-container"
          >
            <div className="modal-title">
              <span className="title">{title}</span>
              <span className="icon" onClick={() => setIsVisible(false)} /> {/* close icon */}
            </div>
            <div className="modal-body">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")
  );
}
