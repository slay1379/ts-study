import { useEffect, useState } from "react";
import { useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    console.log("지금부터 게임을 시작하지");
  }, []);

  return (
    <div>
      <div>{time}</div>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
