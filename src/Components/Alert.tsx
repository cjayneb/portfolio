import React, { ReactNode, useState } from "react";

interface AlertProps {
  children: ReactNode;
  isDismissable?: boolean;
  onClose: () => void;
}

const Alert = ({ children, isDismissable = true, onClose }: AlertProps) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      {isDismissable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      )}
    </div>
  );
};

export default Alert;
