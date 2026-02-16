import { useState } from "react";
import Likes from "./components/Likes";
import Dislikes from "./components/Dislikes";

export default function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const total = likes - dislikes;

  const reset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
        <h1 className="text-xl font-bold mb-4">Like / Dislike Counter</h1>

        <Likes likes={likes} setLikes={setLikes} />
        <Dislikes dislikes={dislikes} setDislikes={setDislikes} />

        <h2
          className={`mt-4 font-bold ${
            total >= 0 ? "!text-purple-600" : "!text-red-600"
          }`}
        >
          Total: {total}
        </h2>

        <button
          onClick={reset}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
