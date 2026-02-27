export default function Friend({friend}){
  console.log(friend)
  const {name , email} = friend;
  return(
   <div className="card">
    <h3>
      Name: {name}
      <p>Email: {email}</p>
    </h3>
   </div>

  )
}