import { useState } from "react";

export default function SimpleForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("User submitted: ${username}, ${password}");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
