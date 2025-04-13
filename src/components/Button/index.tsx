import classNames from "classnames";
import React from "react";
import { ButtonType, ButtonTypes } from "../../utility/style.ts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  buttonType: ButtonType;
  rounded?: boolean;
  outline?: boolean;
  content?: string;
  disable?: boolean;
  circular?: boolean;
  type?: "submit" | "reset" | "button";
}

function Button({
  children,
  buttonType,
  rounded,
  outline,
  ...rest
}: ButtonProps) {
  const baseStyling = classNames(
    rest.className,
    "flex items-center px-3 py-1.5 border text-white font-semibold rounded",
    {
      "border-blue-500 bg-blue-500":
        !outline && ButtonTypes[buttonType] == ButtonTypes.Primary,
      "border-red-500 bg-red-500":
        !outline && ButtonTypes[buttonType] === ButtonTypes.Danger,
      "border-yellow-500 bg-yellow-500":
        !outline && ButtonTypes[buttonType] === ButtonTypes.Warning,
      "border-green-500 bg-green-500":
        !outline && ButtonTypes[buttonType] === ButtonTypes.Success,
      "border-gray-500 bg-gray-500":
        !outline && ButtonTypes[buttonType] === ButtonTypes.Secondary,

      "border-blue-500 text-blue-500":
        outline && ButtonTypes[buttonType] == ButtonTypes.Primary,
      "border-red-500 text-red-500":
        outline && ButtonTypes[buttonType] == ButtonTypes.Danger,
      "border-green-500 text-green-500":
        outline && ButtonTypes[buttonType] == ButtonTypes.Success,
      "border-yellow-500 text-yellow-500":
        outline && ButtonTypes[buttonType] == ButtonTypes.Warning,
      "text-gray-500 border-gray-500":
        outline && ButtonTypes[buttonType] === ButtonTypes.Secondary,

      "rounded-full": rounded,
      "bg-white": outline,
    }
  );
  return (
    <>
      <button {...rest} className={`${baseStyling}`}>
        {children}
      </button>
    </>
  );
}

export default Button;
