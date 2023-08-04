import './App.css';
import Btn from './components/Btn'
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const addInput = value => {
  setInput(input + value);
}

const calculateResult = () => {
  if (input) {
    setInput(evaluate(input))
  }
  ;
}


  return (
    <div className="App">
      
      <div className="calculator-container">
        <Screen input={input}></Screen>
        <div className='row'>
          <Btn Click={addInput}>1</Btn>
          <Btn Click={addInput}>2</Btn>
          <Btn Click={addInput}>3</Btn>
          <Btn Click={addInput}>+</Btn>
        </div>
        <div className='row'>
          <Btn Click={addInput}>4</Btn>
          <Btn Click={addInput}>5</Btn>
          <Btn Click={addInput}>6</Btn>
          <Btn Click={addInput}>-</Btn>
        </div>
        <div className='row'>
          <Btn Click={addInput}>7</Btn>
          <Btn Click={addInput}>8</Btn>
          <Btn Click={addInput}>9</Btn>
          <Btn Click={addInput}>*</Btn>
        </div>
        <div className='row'>
          <Btn Click={calculateResult}>=</Btn>
          <Btn Click={addInput}>0</Btn>
          <Btn Click={addInput}>.</Btn>
          <Btn Click={addInput}>/</Btn>
        </div>
        <div className='row'>
          <ClearBtn reset={() => setInput('')}>
            Clear
          </ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
