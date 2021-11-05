import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link
      href={{
        pathname: "/[detail]",
        query: { detail: props.id },
      }}
    >
      <div className="flex-row flex sm:flex-col m-3 shadow-md bg-primary-light border-primary-light rounded-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 select-none cursor-pointer">
        <Image
          src={props.url}
          alt="tee"
          width={175}
          height={250}
          className="rounded-l-md sm:rounded-t-md sm:rounded-l-none"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold ml-2 mt-2 p-2">{props.name}</h2>
          <h1 className="text-2xl font-bold ml-2 p-2">
            {"\u20B9" + props.price}
          </h1>
        </div>
      </div>
    </Link>
  );
}
