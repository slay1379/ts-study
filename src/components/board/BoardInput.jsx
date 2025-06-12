import { useContext } from "react";
import boardContext from "./BoardContext";
import useBoard from "./useBoard";

export default function BoardInput() {
  const { isOn, setIsOn, inputValue, setInputValue, addList, data } =
    useBoard(boardContext);
  return (
    <div>
      {isOn === false ? (
        <div>
          <button
            onClick={() => {
              setIsOn(true);
            }}
            className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
          >
            글 작성
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="내용을 작성해주세요"
            value={inputValue}
            className="size-full"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              addList(inputValue);
              setInputValue("");
              setIsOn(false);
            }}
            className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
          >
            작성완료
          </button>
          <button
            onClick={() => setIsOn(false)}
            className="ml-auto bg-gray-400 text-white px-2 py-1 rounded"
          >
            취소
          </button>
        </div>
      )}
    </div>
  );
}
