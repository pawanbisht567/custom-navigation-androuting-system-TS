import DropDown from "./components/Dropdown";

const App = () => {

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

  return (
    <DropDown options={options}/>
  )
};

export default App;