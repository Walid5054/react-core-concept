import { useState } from "react"
export default function ShowHide(){
  const [show, setShow] = useState(false)
  function showContent(){
    setShow(true)
   
  }
  function hideContent(){
    setShow(false)
  }
  return (
    <div>
      <h1>{show ? 'hello react learner'  : ''}</h1>
      <button onClick={showContent}>Show</button>
      <button onClick={hideContent}>Hide</button>
    </div>
  )
}