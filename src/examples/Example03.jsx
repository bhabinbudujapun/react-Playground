import { useState } from "react";

export default function Example03() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(e) {
    setIsChecked(e.target.checked);
  }
  return (
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
  );
}
