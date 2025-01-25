import Accordion from '../components/Accordion';

function AccordionPage() {

  const items = [
    {
      label: "How about React ?",
      content: "We can use the react in any project",
      key: "HAR"
    }, 
    {
      label: "How about React ?",
      content: "We can use the react in any project",
      key: "HTP"
    }, 
    {
      label: "How about React ?",
      content: "We can use the react in any project",
      key: "FAQ"
    } 
  ]

  return (
    <>
      <Accordion items={items}/>
    </>
  )
}

export default AccordionPage;
