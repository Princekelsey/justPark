import React from "react";
import classNames from "classnames";
import "./button.style.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the color of button
   */
  color?: "primary" | "danger";
  /**
   * The native HTML button type
   */
  type?: "button" | "submit" | "reset";

  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  type = "button",
  block,
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    "button",
    color && `button-${color}`,
    block && "block",
    className
  );

  return (
    <button className={classes} {...props} type={type}>
      {children}
    </button>
  );
};

export default Button;
