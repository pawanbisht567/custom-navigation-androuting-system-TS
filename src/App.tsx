import './App.css'
import Button from './components/Button'
import { FiMapPin } from "react-icons/fi";
import { ImBin2 } from "react-icons/im";

function App() {

  return (
    <>
      App
      <div>
        <Button buttonType='Primary' className='mb-5'>
          <FiMapPin/>
            Primary Button
          </Button>
      </div>
      <div>
        <Button className='mb-5' rounded buttonType='Success' onClick={() => { console.log('Clicked') }}>Success Button</Button>
      </div>
      <div>
        <Button className='mb-5' buttonType='Danger' onMouseDown={() => { console.log() }}>
          <ImBin2/>
            Danger Button
        </Button>
      </div>
      <div>
        <Button className='mb-5' buttonType='Secondary' onClickCapture={() => { console.log('Clcik capture') }}>Secondary Button</Button>
      </div>
      <div>
        <Button className='mb-5' buttonType='Warning' outline>Warning Button</Button>
      </div>
    </>
  )
}

export default App
