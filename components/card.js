import Image from "next/image";

export default function Card(props) {
  return (
    <div className="flex-row flex sm:flex-col m-3 shadow-md bg-ivory-light border-ivory-light rounded-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 select-none cursor-pointer">
      <Image
        src={props.url}
        alt="tee"
        width={175}
        height={250}
        className="rounded-l-md sm:rounded-t-md sm:rounded-l-none"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold ml-2 mt-2 p-2">Name</h2>
        <h2 className="text-sm font-light ml-2 p-2">A simple tagline</h2>
        <h1 className="text-2xl font-bold ml-2 p-2">$ 49</h1>
      </div>
    </div>
  );
}
