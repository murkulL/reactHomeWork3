import React from 'react';
import Button from './components/Button/Button';
import './components/Button/ButtonStyle.css';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h3 style={{ marginLeft: '120px' }}>{count}</h3>
      <div className="buttons">
        <Button onClick={increment} value={'+'} color={'green'} />
        <Button onClick={reset} value={'0'} color={'gray'} />
        <Button onClick={decrement} value={'-'} color={'red'} />
      </div>
    </div>
  );
}
export default App;
