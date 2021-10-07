import Image from "next/image";

export default function Detail() {
  return (
    <div className="h-auto sm:h-screen flex justify-center items-center bg-ivory-dark">
      <div className="flex flex-col rounded-md sm:flex-row bg-ivory-light">
        <Image
          src="/images.jpeg"
          alt="tee"
          width={275}
          height={400}
          className="rounded-l-md"
        />
        <div className="flex flex-col p-2 space-y-2">
          <h1 className="text-xl text-gray-800 font-bold">Name</h1>
          <p className="w-auto sm:w-96 overflow-auto flex-grow">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="p-5 flex justify-center">
            <button
              className="bg-dusty p-2 w-full rounded-full text-black"
              type="button"
            >
              Buy Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
