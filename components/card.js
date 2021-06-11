import Image from "next/image";

export default function Card(props) {
  const isActive = true;
  return (
    <div className="flex-row flex sm:flex-col m-6 shadow-md bg-white border-2 border-gray-100 rounded-md hover:shadow-xl">
      <Image
        src={props.url}
        alt="tee"
        width={200}
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
