import { useState } from "react";

export default function Example02() {
  const [text, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
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
  );
}
