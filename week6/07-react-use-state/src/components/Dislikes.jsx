import { useState } from "react";

export default function Dislikes({ dislikes, setDislikes }) {
  return (
    <div className="mb-3">
      <h2 className="font-semibold">Dislikes:</h2>
      <p className="text-lg">{dislikes}</p>
      <button
        onClick={() => {
          setDislikes(dislikes + 1);
        }}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
      >
        💔
      </button>
    </div>
  );
}
