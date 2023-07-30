import "./App.css";
import { TextContext } from "./components-copy/context/context";
import Text1 from "./components-copy/Text1";

function App() {
  function log() {
    console.log("Clickin");
  }
  return (
    <div className="App">
      <TextContext.Provider
        value={{
          name: "hamster",
          log,
        }}
      >
        <Text1 name="hamster" />
      </TextContext.Provider>
    </div>
  );
}

export default App;
