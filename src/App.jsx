import Counter from './counter'
import Batsman  from './batsman';
import Users from './user'
import './App.css'
import Friends from './friends';
import { Suspense } from 'react';
import Posts from './Posts';
import Players from './players';
import PracCounter from './pracCounter';
import ShowHide from './show_hide';



// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()
// }
// const friendsPromise = fetchFriends();


// const fetchPost = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json()
// }
// const postPromise = fetchPost()

function App() {
//  function handleClick(num){
//   alert('I am clicked')
//   const newNum = num+1;

//  }
//  function handleAdd(num){
//     const cnt = num+1;
//     return alert(cnt);
//  }
 
 
  return (
    <>
<h3>Vite + React</h3>

<PracCounter></PracCounter>
<ShowHide></ShowHide>
    {/* <Counter></Counter>
     

     <Players></Players>
   {/* fetch user length */}
     {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense> */}
{/* fetch  map and show the data */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
      
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      {/* fetch post  */}

      {/* <Suspense fallback={<h4>post are coming...</h4>}>

      <Posts postPromise={postPromise}></Posts>
      </Suspense>

     <Batsman></Batsman> */}
     {/* <button onClick={handleClick} >Click Me</button> */}
     {/* <button onClick={() => handleAdd(1)}>Click</button> */} 

    </>
  )
}

export default App
