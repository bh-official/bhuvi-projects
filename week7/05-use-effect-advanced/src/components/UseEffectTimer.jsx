import { useState, useEffect } from "react";

export default function UseEffectTimer() {
  const [cookies, setcookies] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setcookies((prevCookies) => prevCookies + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>UseEffectTimer (cookie clicker)</h2>
      <p>Cookies: {cookies}</p>
    </div>
  );
}
