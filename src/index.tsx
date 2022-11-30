import React from "react";
import { render } from "react-dom";
// import Example from "./example";
import { Board } from "./Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                {/* changed this from "example" */}
                <Board />
            </DndProvider>
        </div>
    );
}

// export default App;
const rootElement = document.getElementById("root");
render(<App />, rootElement);

// import ReactDOM from "react-dom";
// import Board from "./Board";
// import "./index.css";
// import { observe } from "./game";
// import reportWebVitals from "./reportWebVitals";

// observe((picPosition: [number, number]) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <div
//                 style={{
//                     width: "100%",
//                     height: "500px",
//                     border: "1px solid gray"
//                 }}
//             >
//                 <Board picPosition={picPosition} />
//             </div>
//         </React.StrictMode>,
//         document.getElementById("root")
//     );
// });

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
