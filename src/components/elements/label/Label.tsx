import React from "react";
import classNames from "classnames";
import "./label.style.css";

interface LabelProps {
  /**
   * Defines label id
   */
  id?: string;
  /**
   * Defines any other className
   */
  className?: string;
  /**
   * Defines any other props
   */
  [x: string]: any;
}

const Label: React.FC<LabelProps> = ({ id, className, children, ...props }) => {
  const classes = classNames("label", className);

  return (
    <label {...props} className={classes} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
