import { useSearchParams, Link } from "react-router";

export default function Amimals() {
  const [params, setParams] = useSearchParams();

  const animals = [
    "Pigeon",
    "Frog",
    "Cat",
    "Honeybadger",
    "Monkey",
    "Panda",
    "Elephant",
    "Dog",
    "Lion",
    "Tiger",
    "Eagle",
    "Guinea Pig",
    "Possum",
  ];

  if (params.get("sortBy") === "asc") {
    animals.sort();
  } else if (params.get("sortBy") === "desc") {
    animals.sort().reverse();
  }

  return (
    <div>
      <select onChange={(e) => setParams({ sortBy: e.target.value })}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
        <option value="">Don't sort</option>
      </select>

      <nav>
        <Link to="/animals?sortBy=asc">Sort Ascending</Link>
        <Link to="/animals?sortBy=desc">Sort Descending</Link>
        <Link to="/animals">Don't sort</Link>
      </nav>

      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}
