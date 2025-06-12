import React from "react";
import useBoard from "./useBoard";
import BoardInput from "./BoardInput";
import BoardList from "./BoardList";

export default function App2() {
  const board = useBoard();

  return (
    <div>
      <div>
        <BoardInput />
      </div>
      <div>
        <BoardList />
      </div>
    </div>
  );
}
