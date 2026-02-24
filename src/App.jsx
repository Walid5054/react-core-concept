import Counter from './counter'
import Batsman  from './batsman';
import './App.css'


function App() {
 function handleClick(num){
  alert('I am clicked')
  const newNum = num+1;

 }
 function handleAdd(num){
    const cnt = num+1;
    return alert(cnt);
 }
 
 
  return (
    <>
    <Counter></Counter>
     <h3>Vite + React</h3>
     <Batsman></Batsman>
     <button onClick={handleClick} >Click Me</button>
     <button onClick={() => handleAdd(1)}>Click</button>

    </>
  )
}

export default App
