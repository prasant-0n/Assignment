import React, { useState } from 'react';
import { Button } from '@nextui-org/react'; // Removed useTheme import

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <Button onClick={decrement} variant="ghost">-</Button> {/* Changed variant to ghost */}
        <span style={{ margin: '0 10px' }}>{count}</span>
        <Button  onClick={increment} variant="shadow">+</Button> {/* Changed variant to ghost */}
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={reset} variant="ghost">Reset</Button> {/* Changed variant to ghost */}
      </div>
    </div>
  );
};

export default Counter;
