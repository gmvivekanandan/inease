export default function Login() {
  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-4 rounded-lg flex space-y-4 flex-col">
        <h2 className="text-center text-2xl font-bold">Inease</h2>
        <h3 className="text-center text-gray-600 font-semibold">Admin login</h3>
        <input
          className=" bg-gray-200 h-8 px-5 pr-10 rounded-lg text-sm focus:outline-none placeholder-gray-500 w-80"
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className=" bg-gray-200 h-8 px-5 pr-10 rounded-lg text-sm focus:outline-none placeholder-gray-500 w-80"
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="p-2 m-3 bg-blue-500 rounded-full text-white">
          Login
        </button>
      </div>
    </div>
  );
}
