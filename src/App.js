import './App.css';
import logo from './assets/logo.jpg';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = value => {
    setInput(input + value);
  }

  const calculateResult = () => {
    if(input) {
    setInput(evaluate(input));
  }else {
    alert('Please enter values ​​to perform calculations!');
  }
};

  return (
    <div className = "App">
      <div className = 'logo-container'>
      <img src = {logo}
      className = 'logo'
      alt = 'logotype' />
      </div>
      <div className = 'calculator-container'>
        <Screen input = {input}/>
        <div className ='row'>
          <Button handleClic = {addInput}>1</Button>
          <Button handleClic = {addInput}>2</Button>
          <Button handleClic = {addInput}>3</Button>
          <Button handleClic = {addInput}>+</Button>
        </div>
        <div className ='row'>
          <Button handleClic = {addInput}>4</Button>
          <Button handleClic = {addInput}>5</Button>
          <Button handleClic = {addInput}>6</Button>
          <Button handleClic = {addInput}>-</Button>
        </div>
        <div className ='row'>
          <Button handleClic = {addInput}>7</Button>
          <Button handleClic = {addInput}>8</Button>
          <Button handleClic = {addInput}>9</Button>
          <Button handleClic = {addInput}>*</Button>
        </div>
        <div className ='row'>
          <Button handleClic = {calculateResult}>=</Button>
          <Button handleClic = {addInput}>0</Button>
          <Button handleClic = {addInput}>.</Button>
          <Button handleClic = {addInput}>/</Button>
        </div>
        <div className = 'row'>
          <ClearButton handleClear = {() => setInput('')}>
            CLEAR
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
