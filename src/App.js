import './App.css';
import logo from './assets/logo-factoria.png';
import Button from './components/Button';
import Screem from './components/Screem';
import ClearButton from './components/Clear-button';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
   setInput(input + val);
  };

  const calculateResults= () =>{
    if (input) {
      setInput(evaluate(input));
  } else {
    alert("Plese add value to calculate the results");
  }
};
 return(
  <div className='App'>
    <div className='logo-container'>
      <img
      src={logo}
      className='logo'
      alt='logo'  />
        <h1 className='tile'>Calculator</h1>
      </div>
      <div className='calculator-container'>
        <Screem input={input}/>
        <div className='row'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='row'>
        <Button manageClick={addInput}>4</Button>
        <Button manageClick={addInput}>5</Button>
        <Button manageClick={addInput}>6</Button>
        <Button manageClick={addInput}>-</Button>
        </div>
        <div className='row'>
        <Button manageClick={addInput}>7</Button>
        <Button manageClick={addInput}>8</Button>
        <Button manageClick={addInput}>9</Button>
        <Button manageClick={addInput}>*</Button>
        </div>
        <div className='row'>
        <Button manageClick={calculateResults}>=</Button>
        <Button manageClick={addInput}>0</Button>
        <Button manageClick={addInput}>.</Button>
        <Button manageClick={addInput}>/</Button>
        </div>
        <div className='row'>
         <ClearButton manageClear={() => setInput('')}>
          Clear
         </ClearButton>
        </div>
      </div>
   </div>
 );
 

}

export default App;
