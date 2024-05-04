import React, { useState } from 'react';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [colorLevel, setColorLevel] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
    setColorLevel(colorLevel + 255 / 10); // Divide 255 by the number of increments desired
  };

  const decrementCount = () => {
    setCount(count - 1);
    setColorLevel(colorLevel - 255 / 10); // Divide 255 by the number of decrements desired
  };

  const resetCount = () => {
    setCount(0);
    setColorLevel(0);
  };

  const backgroundStyle: React.CSSProperties = {
    height: `${colorLevel}px`,
    backgroundColor: `rgb(${Math.round(colorLevel)}, ${Math.round(255 - colorLevel)}, ${Math.round(255 - colorLevel)})`, 
    transition: 'height 0.5s ease', // Adjust transition speed as needed
  };

  return (
    <div>
      <div className="color-level" style={backgroundStyle}>

      <div style={{ position: 'relative', textAlign: 'center' }} className='m-4 p-4 flex flex-row justify-center items-center gap-2'>
        <button className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200 relative" onClick={incrementCount} >Increment</button>
        <button className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 relative" onClick={resetCount} >Reset</button>
        <button className="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200 relative" onClick={decrementCount} >Decrement</button>
      </div>
        <HomePage/>
      </div>
    </div>
  );
};

export default App;
