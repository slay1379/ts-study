import { useState, useEffect } from "react";

export default function Banword({ banwords, setBanwords }) {
  const [word, setWord] = useState("");

  const addWord = () => {
    if (!word.trim() || banwords.includes(word)) return;
    setBanwords((prev) => [...prev, word]);
    setWord("");
  };

  return (
    <div>
      <label>
        금지어 입력
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={addWord}>Add</button>
        <ul>
          {banwords.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
      </label>
    </div>
  );
}
