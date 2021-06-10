import Image from "next/image";

export default function Card(props) {
  const isActive = true;
  return (
    <div className="flex flex-col m-8 p-2 shadow-xl bg-white border-2 border-gray-100 rounded-md">
      <Image
        src="/drawsta_random_tee.jpg"
        alt="tee"
        width={150}
        height={300}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold ml-2 mt-2 p-2">Name</h2>
      <h2 className="text-sm font-light ml-2 p-2">A simple tagline</h2>
      <h1 className="text-2xl font-bold ml-2 p-2">$ 49</h1>
      {/*<div className="flex flex-row mr-2">
        <button className="bg-blue-600 rounded-md mx-2 p-3 text-white mb-2 flex-grow">
          View Product
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="hidden sm:inline h-10 w-10 ml-2 hover:text-red-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
  </div>*/}
    </div>
  );
}
