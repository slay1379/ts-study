import { useContext, useEffect } from "react";
import boardContext from "./BoardContext";
import useBoard from "./useBoard";

export default function BoardList() {
  const {
    data,
    editId,
    deleteList,
    updateList,
    setEditId,
    setEditValue,
    setData,
    editValue,
    setList,
    list,
  } = useBoard(boardContext);

  return (
    <div>
      <div>
        <h1>게시글</h1>
      </div>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-400 rounded p-4 m-2 shadow bg-white"
          >
            {editId === item.id ? (
              <div>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => {
                    console.log("넘어오냐?", editValue);
                    const newList = data.map((el) =>
                      el.id === item.id ? { ...el, body: editValue } : el
                    );
                    setData(newList);
                    setEditId(null);
                  }}
                  className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                >
                  수정완료
                </button>
                <button
                  onClick={() => setEditId(null)}
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
                      setEditId(item.id);
                      setEditValue(item.body);
                    }}
                    className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => deleteList(item.id)}
                    className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
            <h3 className="test-lg font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
