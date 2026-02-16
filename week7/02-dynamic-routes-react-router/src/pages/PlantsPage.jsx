import { plants } from "../plantInfo";
import { Link } from "react-router";

export default function PlantsPage() {
  return (
    <section>
      {plants.map((plant) => (
        <div key={plant.id}>
          <Link to={`plants/${plant.id}`}>
            <h2>{plant.name}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}
