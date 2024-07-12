import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleChange(e) {
    setText(e.target.value);
  }

  const [text, setText] = useState("Hello");
  function resetCount() {
    setCount(count * 0);
  }

  function handleCount() {
    setCount(count + 1);
  }

  const [isChecked, setIsChecked] = useState(false);
  function handleChecked(e) {
    setIsChecked(e.target.checked);
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
      <h1 className="text-3xl text-white mt-2"> Examples 02</h1>
      <div className="flex flex-row mt-4">
        <input
          maxLength="26"
          onChange={handleChange}
          className="outline-none px-1"
          value={text}></input>
      </div>
      <p className="text-xl text-white">You Typed: {text}</p>
      <h1 className="text-3xl text-white mt-2"> Examples 03</h1>
      <div className="flex flex-row mt-4">
        <label className="text-xl text-white">
          <input type="checkbox" onChange={handleChecked} className="mr-1" />I
          liked this
        </label>
      </div>
      <p className="text-xl text-white">
        You {isChecked ? "liked" : "do not liked"} this.
      </p>
    </div>
  );
}

export default App;
