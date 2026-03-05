import pg from "pg";
import { redirect } from "next/navigation";

export default function Page() {
  // server function
  // they *must* be async
  // they must have "use server" as the first

  async function handleSubmit(formData) {
    "use server";
    console.log(`I'm a console log`);
    // any function passed as an action to a form automatically gets FormData - so don't need to make it

    // turn our FormData into a regular object
    const { name, description, scientfic_name, image } =
      Object.fromEntries(formData);
    // console.log(data)

    const db = new pg.Pool({ connectionString: process.env.DB_CONN });
    const newAnimal = await db.query(
      `insert into animals (name, description, scientfic_name, image) VALUES ($1, $2, $3, $4)`,
      [name, description, scientfic_name, image],
    );

    redirect(`/animals`);
  }

  return (
    <div>
      <h2>Add a new animal</h2>
      <form action={handleSubmit}>
        <input name="name" placeholder="name" />
        <input type="text" name="description" id="" placeholder="description" />
        <input
          type="text"
          name="scientfic_name"
          id=""
          placeholder="scientfic_name"
        />
        <input type="text" name="image" id="" placeholder="image url" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
