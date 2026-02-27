import { useState } from "react";

export function PasswordToggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input type={show ? "text" : "password"} placeholder="Enter password" />
      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}