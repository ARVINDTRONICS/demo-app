import logo from "./logo.svg";
import "./App.css";
import { ButtonComponent } from "./components/Shared/Button";
import HeaderTitle from "./Title";


function App() {
    const add = (a, b) => {
    return a + b;
  };
  let applyColor = false;
  return (
    <div className={applyColor ? "name" : ""}>
      <HeaderTitle/>
      {[1, 2, 3].map((value, index) => {
        return (
          <div>
            <p>
              Index is {index} - Value is {value}
            </p>
          </div>
        );
      })}
      <div className={"button-container"}>
        <div>
          <ButtonComponent name={"Arvind"} color={"red"}  />
        </div>
        <div>
          <ButtonComponent name={"Tamil"} color={"blue"} />
        </div>
      </div>
      <HeaderTitle/>
    </div>
  );
}

export default App;

// <div className={applyColor?"name":""}>
//       {[1, 2, 3].map((value, index) => {
//         return (
//           <div>
//             <p>
//               Index is {index} - Value is {value}
//             </p>
//           </div>
//         );
//       })}
//     </div>
