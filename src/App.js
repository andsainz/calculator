import './App.css';
import Btn from './components/Btn'
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn'

function App() {
  return (
    <div className="App">
      
      <div className="calculator-container">
        <Screen></Screen>
        <div className='row'>
          <Btn>1</Btn>
          <Btn>2</Btn>
          <Btn>3</Btn>
          <Btn>+</Btn>
        </div>
        <div className='row'>
          <Btn>4</Btn>
          <Btn>5</Btn>
          <Btn>6</Btn>
          <Btn>-</Btn>
        </div>
        <div className='row'>
          <Btn>7</Btn>
          <Btn>8</Btn>
          <Btn>9</Btn>
          <Btn>*</Btn>
        </div>
        <div className='row'>
          <Btn>=</Btn>
          <Btn>0</Btn>
          <Btn>.</Btn>
          <Btn>/</Btn>
        </div>
        <div className='row'>
          <ClearBtn>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
