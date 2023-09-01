import "./App.css";
import Navbar from "./components/Navbar";
import State from "./context/State";
function App() {
  return (
    <>
      <State>
        <Navbar />
      </State>
    </>
  );
}

export default App;
