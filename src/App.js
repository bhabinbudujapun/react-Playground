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

  const [name, setName] = useState("Bhabin");
  const [age, setAge] = useState(25);

  return (
    <div className="mt-3 ml-2 flex flex-col justify-center items-center h-screen gap-2">
      <div className="border-2 rounded-md sm:w-1/2 p-3">
        <h1 className="text-3xl text-white mt-2"> Examples 01</h1>
        <div className="flex flex-row mt-4">
          <p className="text-xl text-white">You clicked</p>
          <button
            className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1 mx-2"
            onClick={handleCount}>
            BUTTON
          </button>
          <p className="text-xl text-white">{count} times</p>
          <button
            className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1 ml-2"
            onClick={resetCount}>
            RESET
          </button>
        </div>
      </div>

      <div className="border-2 rounded-md sm:w-1/2 p-3">
        <h1 className="text-3xl text-white mt-2"> Examples 02</h1>
        <div className="flex flex-row mt-4">
          <input
            maxLength="26"
            onChange={handleChange}
            className="outline-none px-1"
            value={text}></input>
        </div>
        <p className="text-xl text-white">You Typed: {text}</p>
      </div>

      <div className="border-2 rounded-md sm:w-1/2 p-3">
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

      <div className="border-2 rounded-md sm:w-1/2 p-3">
        <h1 className="text-3xl text-white mt-2"> Examples 04</h1>
        <div className="flex flex-row mt-4">
          <input
            type="text"
            className="outline-none px-1"
            maxLength="26"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <p className="text-xl text-white">
          Hello, {name}. Your are {age}
        </p>
        <button
          className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1"
          onClick={() => setAge(age + 1)}>
          increase age
        </button>
        <button
          className="text-gray-600 rounded-sm font-bold bg-green-200 px-4 py-1 ml-2"
          onClick={() => setAge(age - age + 25)}>
          reset age
        </button>
      </div>
    </div>
  );
}

export default App;
