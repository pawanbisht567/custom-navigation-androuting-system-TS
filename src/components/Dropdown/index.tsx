import { useState } from "react";

export interface OptionsItem {
    label: string;
    value: string;
  }

interface DropDownProps {
    options: OptionsItem[];
    selection: OptionsItem | null;
    onSelect: (selected: OptionsItem) => void;
}
function DropDown( props: DropDownProps) {
    const [isOpen, SetIsOpen] = useState(false); 
    
    const handleClick = () => {
        SetIsOpen(!isOpen)
    }

    const handleClickOptions = (option: OptionsItem) => {
        SetIsOpen(false);
        props.onSelect(option);
    }

    const renderedOptions = props.options.map((option: OptionsItem) => {
        return <div key={option.value} onClick={() => handleClickOptions(option)}>{option.label}</div>
    })

    let content = "Select...";
    if(props.selection) {
        content = props.selection.label
    }
    return (
        <>
        <div onClick={handleClick}>{content}</div>
        <div>{isOpen && renderedOptions}</div>
        </>
    )
}

export default DropDown;