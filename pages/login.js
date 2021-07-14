export default function Login() {
  return (
    <div className="bg-ivory-dark h-screen flex items-center justify-center">
      <div className="bg-ivory-light p-4 rounded-lg flex space-y-4 flex-col">
        <h2 className="text-center text-2xl font-bold">Inease</h2>
        <h3 className="text-center text-gray-600 font-semibold">Admin login</h3>
        <input
          className=" bg-sand-dollar h-8 px-5 pr-10 rounded-lg text-sm focus:outline-none placeholder-black w-80"
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className=" bg-sand-dollar h-8 px-5 pr-10 rounded-lg text-sm focus:outline-none placeholder-black w-80"
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="p-2 m-3 bg-dusty rounded-full text-black">
          Login
        </button>
      </div>
    </div>
  );
}
