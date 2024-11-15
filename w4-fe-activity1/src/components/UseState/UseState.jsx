import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0)

function setDark(){
  setTheme('dark')
}
const increase = () => {setCount(count + 1)}
const decrease = () => {setCount(count - 1)}
function swapState(){
  if (theme == 'dark'){
    setTheme('light')
  } else {
    setTheme('dark')
  }
}

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={swapState}>Light/Dark</button>
      <h2>Count: {count}</h2>
      <button onClick={increase}>
        Increment
      </button>
      <button onClick={decrease}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
