import pg from "pg";
import { db } from "@/utils/utilities.js";

export default async function Post({ params }) {
  const { id } = await params;
  const db = new pg.Pool({
    db,
  });

  const post = await db.query(`SELECT * FROM posts WHERE id = $1`, [
    Number(id),
  ]);
  const result = post.rows[0];
  console.log(result);

  if (!result) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <div key={result.id}>
        <h2>{result.title}</h2>
        <p>{result.content}</p>
      </div>
    </div>
  );
}
