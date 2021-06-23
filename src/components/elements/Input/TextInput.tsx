import React from "react";
import Label from "../label/Label";
import "./input.style.css";

interface TextInputProps extends React.ComponentPropsWithRef<"input"> {
  /**
   * Defines the type of the input
   */
  type?: string;
  /**
   * Defines input icon
   */
  icon?: string;
  /**
   * Defines the id of the input
   */
  id?: string;
  /**
   * Defines input label
   */
  label?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  icon,
  id,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && <Label id={id}>{label}</Label>}
      {icon ? (
        <div className="input-with-icon">
          <input type={type} id={id} {...props} />
          <i className={icon} aria-hidden="true"></i>
        </div>
      ) : (
        <input type={type} id={id} {...props} />
      )}
    </React.Fragment>
  );
};

export default TextInput;
