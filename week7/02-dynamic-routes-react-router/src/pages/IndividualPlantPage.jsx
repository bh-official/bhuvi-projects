import { useParams, Outlet } from "react-router";
import { findPlant } from "../plantInfo";

export default function IndividualPlantPage() {
  const { id } = useParams();

  const plantDetails = findPlant(id);

  console.log(plantDetails);
  return (
    <section>
      <p> This is a page for single plants information</p>

      <Outlet />
      {plantDetails ? (
        <div>
          <h2>{plantDetails.name}</h2>
          <img src={plantDetails.image} />
          <p>{plantDetails.description} </p>
        </div>
      ) : (
        <p> Couln't find a plant with id {id} </p>
      )}
    </section>
  );
}
