import { useState } from "react";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

interface AccordionItem {
    label: string;
    content: string;
    key: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion = (props: AccordionProps) => {
    const [k, setKey] = useState('');

    const eventHandler = (key: string) => {
        setKey((prev) => {
            if(prev === key) {
                return '';
            }
            return key;
        })
        
    }

    const renderedItems = props.items.map(item => {

        const icon = <span className="text-2xl">{k === item.key ? <FaChevronDown /> : <FaChevronLeft /> }</span>

        return (<>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" key={item.key} onClick={() => eventHandler(item.key)}>{item.label}{icon}</div>
        {(k === item.key) && <div className="border-b p-5">{item.content}</div>}
        </>)
    })

    return (<div className="border-x border-t rounded">
        {renderedItems}
    </div>)
}

export default Accordion;