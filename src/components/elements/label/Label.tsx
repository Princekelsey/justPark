import React from "react";
import "./label.style.css";

interface LabelProps {
  /**
   * Defines label id
   */
  id?: string;
  /**
   * Defines any other props
   */
  [x: string]: any;
}

const Label: React.FC<LabelProps> = ({
  labelHidden,
  id,
  className,
  children,
  ...props
}) => {
  return (
    <label {...props} className="label" htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
