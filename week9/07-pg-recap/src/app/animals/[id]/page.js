import Image from "next/image";
import pg from "pg";

export default async function Page({ params }) {
  const { id } = await params;
  const db = new pg.Pool({ connectionString: process.env.DB_CONN });
  // /animals/1
  // {id: 1}
  // /animals/3
  // {id : 3}
  const result = await db.query(`select * from animals where id = $1`, [id]);
  const animalsDetails = result.rows[0];

  console.log(animalsDetails);
  return (
    <div>
      <Image height={400} width={500} src={animalsDetails.image} alt="" />
    </div>
  );
}
