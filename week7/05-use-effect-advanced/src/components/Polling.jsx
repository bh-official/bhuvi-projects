import { useState, useEffect } from "react";

export default function Polling() {
  const [img, setImg] = useState({});
  console.log(img);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://randomfox.ca/floof/`);
      const data = await res.json();
      setImg(data);
    }
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <img src={img.image} alt="fox" />
    </div>
  );
}
