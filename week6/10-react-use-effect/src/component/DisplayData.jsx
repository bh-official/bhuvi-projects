import { useEffect } from "react";

export default function DisplayData() {
  const [users, setUsers] = useState([]);
  console.log("Running display data");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 ? users.map((user) => <p>{user.username}</p>) : ""}
    </div>
  );
}
