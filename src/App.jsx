import React, { useState, useEffect } from "react";
import "./index.css";
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage";
import CountComponent from "./components/CountComponent";
import ToggleButton from "./components/ToggleButton";
import Banword from "./components/Banword";
import Filter from "./components/Filter";
import UserList from "./components/UserList";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";
import TodoInput from "./components/TodoInput";
import Colorbar from "./components/Colorbar";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import useTodo from "./components/useTodo";
import TodoContext from "./components/TodoContext";
// function App() {
//   return (
//     <>
//       <div>
//         {/* <HelloWorld/> */}
//         {/* <CaptionImage
//           imgUrl="https://cf.asiaartistawards.com/news/21/2024/03/2024031309230655218_1.jpg"
//           caption="이건 카리나입니다."
//         />
//         <CountComponent /> */}
//       </div>
//     </>
//   );
// }

// export default App;

export default function App() {
  // const [visible, setVisible] = useState(false);
  // const [banwords, setBanwords] = useState([]);
  // const [color, setColor] = useState("bg-white");
  // const [inputValue, setInputValue] = useState("");
  // const [list, setList] = useState(() => {
  //   try {
  //     const saved = sessionStorage.getItem("todoList");
  //     return saved ? JSON.parse(saved) : [];
  //   } catch {
  //     return [];
  //   }
  // });

  // const [searchValue, setSearchValue] = useState("");

  const todo = useTodo();

  return (
    <TodoContext.Provider value={todo}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600">
        <h1 className="text-3xl">Todo App</h1>
        <div>
          {/* <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null} */}
          {/* <ToggleButton /> */}
          {/* <Filter banwords={banwords} /> */}
          {/* <Banword banwords={banwords} setBanwords={setBanwords} /> */}
          {/* <UserList /> */}
          {/* <StopWatch /> */}
          {/* <Timer /> */}
          <TodoInput />
        </div>
        <div>
          <TodoSearch />
        </div>
        <div>
          <Colorbar />
        </div>
        <div>
          <h1 className="text-3xl flex items-center justify-center">
            Todo Items
          </h1>
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
}
