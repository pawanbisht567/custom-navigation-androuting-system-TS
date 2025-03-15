import { useState } from "react";
import { IoChevronDown, IoChevronUp  } from "react-icons/io5";
import Pannel from "../Pannel";

export interface OptionsItem {
    label: string;
    value: string;
  }

interface DropDownProps {
    options: OptionsItem[];
    value: OptionsItem | null;
    onChange: (selected: OptionsItem) => void;
}
function DropDown( props: DropDownProps) {
    const [isOpen, SetIsOpen] = useState(false); 
    
    const handleClick = () => {
        SetIsOpen(!isOpen)
    }

    const handleClickOptions = (option: OptionsItem) => {
        SetIsOpen(false);
        props.onChange(option);
    }

    const renderedOptions = props.options.map((option: OptionsItem) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleClickOptions(option)}>{option.label}</div>
    })

    let content = "Select...";
    if(props.value) {
        content = props.value.label;
    }
    return (
        <div className="w-48 relative" >
            <Pannel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {content} 
                {!isOpen && <IoChevronDown /> }
                {isOpen && <IoChevronUp /> }
            </Pannel>
            {isOpen && <Pannel className="absolute top-full">{renderedOptions}</Pannel>}
        </div>
    )
}

export default DropDown;