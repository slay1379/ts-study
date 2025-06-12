import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import useTodo from "./useTodo.jsx";
import TodoContext from "./TodoContext.jsx";

export default function TodoInput() {
  //   useEffect(() => {
  //     const saved = JSON.parse(sessionStorage.getItem("todoInput"));
  //     if (saved) {
  //       setInputValue(saved);
  //     }
  //   }, []);

  const { inputValue, color, setInputValue, handleAdd } =
    useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        placeholder="입력"
        value={inputValue}
        className={`w-96 h-7 rounded border ${color}`}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-gray-500 h-7 text-white">
        입력
      </button>
    </div>
  );
}
