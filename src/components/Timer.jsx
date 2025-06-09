import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const EndTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    alert("타이머 종료");
    setTime(10);
  };

  useEffect(() => {
    if (time === 0) {
      EndTimer();
    }
  }, [time]);

  return (
    <div>
      <div>{time}</div>
      <label>
        입력
        <input type="number" />
      </label>
      <button onClick={startTimer}>타이머 시작</button>
    </div>
  );
}
