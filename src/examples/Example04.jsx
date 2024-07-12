import { useState } from "react";

export default function Example04() {
  const [name, setName] = useState("Bhabin");
  const [age, setAge] = useState(25);

  return (
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
  );
}
