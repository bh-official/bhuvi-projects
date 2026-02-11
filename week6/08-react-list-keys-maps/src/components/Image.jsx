export default function Image({ name, author, description, img }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h2> {name}</h2>
      <p>by {author}</p>
      <p>{description}</p>
    </div>
  );
}
