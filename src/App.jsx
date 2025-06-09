import React, { useState } from "react";
import ".global/css";
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

  return (
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
  );
}
