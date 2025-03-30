import { useState } from "react";
import DropDown, { OptionsItem } from "../components/Dropdown"; // Import OptionsItem

const DropDownPage = () => {
  const [selectedOption, SetSelectedOption] = useState<OptionsItem | null>(null);

  const options = [
    {
      label: 'Red', value: 'Red'
    },
    {
      label: 'Green', value: 'Green'
    },
    {
      label: 'Blue', value: 'Blue'
    },
  ]

  const handleOptionSelect = (selected: OptionsItem) => {
    SetSelectedOption(selected)
  }

  return (
    <DropDown options={options} value={selectedOption} onChange={handleOptionSelect} />
  )
};

export default DropDownPage;