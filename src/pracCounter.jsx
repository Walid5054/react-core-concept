import { useState } from "react";

export default function PracCounter(){
  const [count, setCount] = useState(0)

  const style = {
    border: '2px solid white',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer'
  }
  function increaseCount(){
    const updateCount = count+1;
    setCount(updateCount)
  }
  function decreaseCount(){
    const updateCount = count-1;
    setCount(updateCount)
  }
  function resetAll(){
    setCount(0)
  }
  return (
<div>
  <h1>Count: {count}</h1>
  <button style={style} onClick={increaseCount}>Increase</button>
  <button onClick={decreaseCount}>Decrease</button>
  <button onClick={resetAll}>ResetAll</button>
</div>
  )
}