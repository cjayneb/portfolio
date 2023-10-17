import React from "react";
import "./Button.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={"btn btn-" + color}
    >
      {children}
    </button>
  );
};

export default Button;
