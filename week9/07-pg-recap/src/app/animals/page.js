import Link from "next/link";
import pg from "pg";

export default async function Page() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const result = await db.query(`select * from animals`);
  const animals = result.rows;

  console.log(animals);
  return (
    <div>
      {animals.map((animal) => (
        <Link href={`/animals/${animal.id}`} key={animal.id}>
          {animal.name}
        </Link>
      ))}
    </div>
  );
}
