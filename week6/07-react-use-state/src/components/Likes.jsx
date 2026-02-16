import { useState } from "react";

export default function Likes({ likes, setLikes }) {
  return (
    <div className="mb-3">
      <h2 className="font-semibold">Likes:</h2>
      <p className="text-lg">{likes}</p>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
        className="bg-cyan-500 text-white px-4 py-2 rounded mt-2 hover:bg-cyan-600"
      >
        ❤️
      </button>
    </div>
  );
}
