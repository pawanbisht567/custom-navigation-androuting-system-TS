interface AccordionItem {
    label: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

const Accordion = (props: AccordionProps) => {
    return (<div>
        {props.items.map(item => {
            return (<p>{item.label}</p>)
        })}
        Accordion
    </div>)
}

export default Accordion;