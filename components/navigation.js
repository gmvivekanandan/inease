export default function Navigation() {
  return (
    <div className="p-4 flex flex-row bg-gray-50">
      <div>
        <h1 className="font-sans text-3xl font-bold">Inease</h1>
      </div>
      <div className="hidden m-auto sm:flex">
        <div className="relative ml-60 flex-row flex justify-start">
          <span className="absolute inset-y-0 left-0 flex pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            className=" bg-gray-100 h-8 px-10 pr-10 rounded-lg text-sm focus:outline-none w-80"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="hidden md:flex flex-grow justify-end items-center ">
        <a className="mr-5 font-semibold hover:text-blue-600" href="#">
          Home
        </a>
        <a className="font-semibold hover:text-blue-600" href="#">
          About Us
        </a>
      </div>
    </div>
  );
}
