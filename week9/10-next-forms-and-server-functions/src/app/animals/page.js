import Image from "next/image";
import Link from "next/link";
import pg from "pg";
import TextHighlight from "@/components/TextHighlight";

export default async function Page() {
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });

  const responseFromDB = await db.query(`select * from animals`);
  const animals = responseFromDB.rows;
  console.log(animals);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Animals</h2>
      <TextHighlight>
        <div>
          <h2 className="bg-blue-950"> This is an h2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </TextHighlight>
      <div className="flex flex-wrap flex-row gap-4">
        {animals.map((animal) => (
          <Link href={`/animals/${animal.id}`} key={animal.id}>
            <Image src={animal.image} alt="" width={300} height={300} />
          </Link>
        ))}
      </div>
    </div>
  );
}
