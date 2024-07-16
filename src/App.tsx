import "./App.css";
import { Counter } from "./app/features/counter/Counter";
import Images from "./app/features/images/Images";

function App() {
  return (
    // <>
    //   <div>Hello</div>
    //   <Counter />
    // </>
    <div className="App">
      <header className="App-header">
        <Counter />
        <Images />
      </header>
    </div>
  );
}

export default App;
