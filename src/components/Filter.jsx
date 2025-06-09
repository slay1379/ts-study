import { useState } from "react";

export default function Filter({ banwords }) {
  const [input, setInput] = useState("");
  const [detected, setDetected] = useState([]);

  const handleCheck = () => {
    // 어떤 금지어가 포함됐는지 찾기
    const found = banwords.filter((word) => input.includes(word));

    setDetected(found); // 감지된 금지어 저장

    // 감지된 금지어를 ***로 치환
    const filtered = input;
    found.forEach((word) => {
      const star = "*".repeat(word.length);
      // 정규식으로 모든 위치에 있는 해당 단어를 치환
      const regex = new RegExp(word, "g");
      setInput((prev) => prev.replace(regex, star));
    });
  };

  return (
    <div>
      <input
        placeholder="사용자 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCheck}>추가</button>

      <ul>
        {detected.map((word, i) => (
          <li key={i}>**{word}**가 입력되었습니다.</li>
        ))}
        {detected.length > 0 && (
          <>
            <li>**는 하면 안돼!</li>
          </>
        )}
      </ul>
    </div>
  );
}
