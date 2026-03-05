import pg from "pg";
import Image from "next/image";

export default async function Page({ params }) {
  // {id: whatevertheidIS}
  const { id } = await params;

  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const animals = await db.query(`select * from animals where id = $1`, [id]);
  const result = animals.rows[0];

  console.log(result);
  return (
    <div>
      <Image
        src={result.image}
        alt={result.name}
        width={300}
        height={300}
        className="rounded-lg shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">{result.name}</h2>
        <p className="text-gray-400">{result.description}</p>
        <p className="text-gray-400">{result.scientfic_name}</p>
      </div>
    </div>
  );
}
