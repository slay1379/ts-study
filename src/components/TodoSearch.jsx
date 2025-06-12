import { useState } from "react";
import { useContext } from "react";
import TodoContext from "./TodoContext";
import useTodo from "./useTodo";

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-96 h-7 rounded border"
      />
    </div>
  );
}
