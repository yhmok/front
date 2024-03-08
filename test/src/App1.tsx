import React, { useState } from 'react'
import './App.css'
//import GroupComponent from './GroupComponent';

function App() {
  const [arr, setArr] = useState<number[]>([0, 0]);
  const increaseAt = (index: number) => {
    arr[index] = arr[index] + 1;
    setArr([...arr]);
  };
  return (
    <div className="box">
      <h1>App</h1>
      <p>{ arr.join(" , ") }</p>
      <button onClick={() => increaseAt(0)} >a[0]++</button>
      <button onClick={() => increaseAt(1)} >a[1]++</button>
    </div>
  );
}

export default App;