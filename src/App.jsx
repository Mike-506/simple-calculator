import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      const res = evaluate(input);
      setInput(Number(res).toFixed(6))
    } else {
      alert('Please input a value to make some math') 
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <Screen input = {input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={result}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
        <ClearButton handleClear={() => setInput('')}>
          Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
