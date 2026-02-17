import { useState } from "react";

export default function SimpleForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`User submitted: ${username}, ${password}`);
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

// adding useActionState version of the form

// import { useState, useActionState } from "react";

// export default function SimpleForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function action(prevState) {
//     console.log(`User submitted: ${username}, ${password}`);
//     return `Submitted: ${username}`;
//   }

//   const [message, formAction] = useActionState(action, "");

//   return (
//     <div>
//       <form action={formAction}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       <p>{message}</p>
//     </div>
//   );
// }

// replacing the above code with a simpler version that doesn't use useState, and instead relies on the formData passed to the action function by useActionState

// import { useActionState } from "react";

// export default function SimpleForm() {
//   function handleSubmit(prevState, formData) {
//     const username = formData.get("username");
//     const password = formData.get("password");

//     console.log(`User submitted: ${username}, ${password}`);

//     return `Submitted: ${username}`;
//   }

//   const [message, formAction] = useActionState(handleSubmit, "");

//   return (
//     <div>
//       <form action={formAction}>
//         <label htmlFor="username">Username:</label>
//         <input type="text" name="username" />

//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" />

//         <button type="submit">Submit</button>
//       </form>

//       <p>{message}</p>
//     </div>
//   );
// }
