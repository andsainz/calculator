import './App.css';
import Btn from './components/Btn.js'

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div className='row'>
          <Btn>1</Btn>
          <Btn>+</Btn>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
