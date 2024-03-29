import Link from "next/link";

export default function Navigation({ click, active }) {
  return (
    <div className="p-4 flex flex-row bg-primary-light">
      <div className="flex-grow sm:flex-initial">
        <h1 className="text-3xl font-bold">INEASE</h1>
      </div>
      <button
        className="rounded-3xl p-2.5 sm:hidden focus:outline-none"
        onClick={() => click()}
        onBlur={() => click()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`bg-gray-100 text-black w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          active ? "translate-x-0 h-screen" : "-translate-x-full"
        } z-10 sm:hidden transition duration-200 ease-in-out`}
      >
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold text-black">INEASE</span>
        </a>

        <nav>
          <Link href="/">
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
            >
              Home
            </a>
          </Link>
          <Link href="/aboutUs">
            <a
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-secondary hover:text-white"
            >
              About Us
            </a>
          </Link>
        </nav>
      </div>
      {/* <div className="hidden m-auto sm:flex">
        <div className="relative ml-52 flex-row flex justify-start">
          <span className="absolute inset-y-0 left-0 flex pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            className=" bg-gray-100 h-8 px-10 pr-10 rounded-lg text-sm focus:outline-none w-80 placeholder-black"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
      </div> */}
      <div className="hidden md:flex flex-grow justify-end items-center ">
        <Link href="/">
          <a className="mr-5 font-semibold hover:text-secondary" href="#">
            Home
          </a>
        </Link>
        <Link href="/aboutUs">
          <a className="font-semibold hover:text-secondary" href="#">
            About Us
          </a>
        </Link>
      </div>
    </div>
  );
}
