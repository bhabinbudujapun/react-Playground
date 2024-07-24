function UserInfo() {
  return (
    <div className="border-2 rounded-md">
      <h1 className="text-3xl text-white mt-2 text-center"> API HANDLING</h1>
      <div className="mx-auto right-0 mt-2">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            <svg
              aria-hidden="true"
              role="img"
              className="h-24 w-24 text-white rounded-full mx-auto"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path>
            </svg>
            <p className="pt-2 text-lg font-semibold text-gray-50">
              Hi, My name is
            </p>
            <p className="pt-2 text-lg font-semibold text-gray-50">John Doe</p>
            <div className="mt-5">
              <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                USER DETAILS
              </a>
            </div>
            <div className="flex gap-2">
              <p className="text-sm py-3 text-gray-100">2/2/1962</p>
              <p className="text-sm py-3 text-gray-100">John@Doe.com</p>
              <p className="text-sm py-3 text-gray-100">(661) 880-3081</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
