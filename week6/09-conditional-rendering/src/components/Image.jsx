import { useState } from "react";

export default function Image({ name, author, description, img, loved }) {
  const [showData, setShowData] = useState(false);

  function handleClick() {
    setShowData(!showData);
    console.log(showData);
  }

  if (loved == false) {
    return <p> This image is Hidden</p>;
  }

  return (
    <div>
      <img src={img} alt={name} onClick={handleClick} />

      {showData == true ? (
        <div>
          <h2> {name}</h2>
          <p>by {author}</p>
          <p>{description}</p>
        </div>
      ) : null}

      {loved && <p>This image is loved!</p>}
      {/* <h2> {name}</h2>
      <p>by {author}</p>
      <p>{description}</p> */}
    </div>
  );
}
