import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CaptionImage";
import CountComponent from "./components/CountComponent";
import React, { useState } from "react";

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
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null}
    </div>
  );
}
