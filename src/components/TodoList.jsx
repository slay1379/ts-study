import { useState } from "react";
import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function TodoList() {
  const {
    list,
    setList,
    editUuid,
    editValue,
    setEditUuid,
    setEditValue,
    searchValue,
    deleteList,
  } = useContext(TodoContext);

  return (
    <>
      {list
        .filter((item) => item.inputValue.includes(searchValue))
        .map((item) => {
          return (
            <div
              key={item.uuid}
              className={`w-96 m-3 text-center ${item.color}`}
            >
              {editUuid === item.uuid ? (
                <div className="flex justify-between items-center rounded borders">
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      const newList = list.map((el) =>
                        el.uuid === item.uuid
                          ? { ...el, inputValue: editValue }
                          : el
                      );
                      setList(newList);
                      setEditUuid(null);
                    }}
                    className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    수정완료
                  </button>
                  <button
                    onClick={() => setEditUuid(null)}
                    className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    취소
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center rounded borders">
                  <span>{item.inputValue}</span>
                  <div>
                    <button
                      onClick={() => {
                        setEditUuid(item.uuid);
                        setEditValue(item.inputValue);
                      }}
                      className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteList(item.uuid)}
                      className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
}
