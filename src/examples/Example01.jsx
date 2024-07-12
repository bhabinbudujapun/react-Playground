import { useState } from "react";

function Example01() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(count * 0);
  }
  return (
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
  );
}

export default Example01;
