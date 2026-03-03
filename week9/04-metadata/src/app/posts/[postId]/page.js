export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).id;
  // load the post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    // title: post.title,
    title: `Individual page`,
    description: `Wow this user has given us a lot of details! Don't contact them on`,
    openGraph: {
      description: `This is a special description for the openGraph protocol!`,
    },
  };
}
export default function Page() {
  return <p>This is the individual posts page</p>;
}
