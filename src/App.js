import "./styles.css";
import Headerbar from "./components/headerBar/headerBar";
import Rightside from "./components/rightSide/rightSide";
import Leftside from "./components/leftSide/leftSide";

export default function App() {
  return (
    <div className="App">
      <Headerbar />
      <div className="content">
        <Leftside />
        <Rightside />
      </div>
    </div>
  );
}
