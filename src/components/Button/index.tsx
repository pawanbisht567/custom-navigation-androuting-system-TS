import classNames from "classnames";
import React from 'react';
import { ButtonType, ButtonTypes } from "../../utility/style.ts";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    buttonType: ButtonType;
    rounded?: boolean;
    outline?: boolean;
    content?: string;
    disable?: boolean;
    circular?: boolean;
    type?: 'submit' | 'reset' | 'button';
}

function Button ({children, buttonType, rounded, outline, ...rest }: ButtonProps) {

    const baseStyling = classNames(rest.className,'flex items-center px-3 py-1.5 border text-white font-semibold rounded', 
        {
        'border-blue-500 bg-blue-500': ButtonTypes[buttonType] == ButtonTypes.Primary,
        'border-red-500 bg-red-500': ButtonTypes[buttonType] === ButtonTypes.Danger,
        'border-yellow-500 bg-yellow-500': ButtonTypes[buttonType] === ButtonTypes.Warning,
        'border-green-500 bg-green-500': ButtonTypes[buttonType] === ButtonTypes.Success,
        'border-gray-500 bg-gray-500': ButtonTypes[buttonType] === ButtonTypes.Secondary,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && ButtonTypes[buttonType] == ButtonTypes.Primary,
        'text-red-500': outline && ButtonTypes[buttonType] == ButtonTypes.Danger,
        'text-white-500': outline && ButtonTypes[buttonType] == ButtonTypes.Warning,
    }
);

    return (
        <>
            <button {...rest} className={`${baseStyling}` }>{children}</button>
        </>
    )
}

export default Button;