import { use } from "react";

export default function Users({ fetchUsers }) {

 const userContent = use(fetchUsers)
 console.log(userContent)

  return (
    <div className="card">
      <h3>Users: {userContent.length}</h3>

    </div>
  );
}