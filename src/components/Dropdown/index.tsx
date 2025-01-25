interface OptionsItem {
    label: string;
    value: string;
}

interface DropDownProps {
    options: OptionsItem[];
}
function DropDown( { options }: DropDownProps) {
    const renderedOptions = options.map((option: OptionsItem) => {
        return <div>{option.label}</div>
    })
    return (
        <>{renderedOptions}</>
    )
}

export default DropDown;