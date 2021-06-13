import Image from "next/image";

export default function AboutUS() {
  return (
    <div className="grid grid-cols-2 h-screen bg-gray-50">
      <div className="flex col-span-2 sm:col-span-1">
        <div className="flex flex-col px-2 justify-center flex-grow">
          <h1 className="font-bold text-3xl mb-2">About Us</h1>
          <h2 className="font-semibold text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h2>
        </div>
      </div>
      <div className="flex col-span-2 sm:col-span-1">
        <div className="flex flex-col flex-grow flex-wrap justify-center ml-6">
          <div className="p-2 flex flex-row">
            <Image
              src="/images.png"
              width={75}
              height={75}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center ml-5">
              <h2 className="text-xl font-bold">Name</h2>
              <h2 className="text-lg font-medium text-blue-500">Position</h2>
            </div>
          </div>
          <div className="p-2 flex flex-row">
            <Image
              src="/images.png"
              width={75}
              height={75}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center ml-5">
              <h2 className="text-xl font-bold">Name</h2>
              <h2 className="text-lg font-medium text-blue-500">Position</h2>
            </div>
          </div>
          <div className="p-2 flex flex-row">
            <Image
              src="/images.png"
              width={75}
              height={75}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center ml-5">
              <h2 className="text-xl font-bold">Name</h2>
              <h2 className="text-lg font-medium text-blue-500">Position</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
