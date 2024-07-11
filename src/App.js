import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function resetCount() {
    setCount(count * 0);
  }

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div className="mt-3 ml-2">
      <h1 className="text-3xl text-white mt-2"> Examples 01</h1>
      <div className="flex flex-row mt-4">
        <p className="text-xl text-white">You clicked</p>
        <button
          className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1 mx-2"
          onClick={handleCount}>
          BUTTON
        </button>
        <p className="text-xl text-white">{count} times</p>
      </div>
      <button
        className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1"
        onClick={resetCount}>
        RESET
      </button>
    </div>
  );
}

export default App;
