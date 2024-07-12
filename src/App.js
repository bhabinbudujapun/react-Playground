import "./App.css";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Example04 from "./examples/Example04";

function App() {
  return (
    <div className="mt-3 ml-2 flex flex-col justify-center items-center h-screen gap-2">
      <Example01 />
      <Example02 />
      <Example03 />
      <Example04 />
    </div>
  );
}

export default App;
