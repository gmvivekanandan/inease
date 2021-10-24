import { useRouter } from "next/router";
import firebase from "../config/firebase";

export default function Login() {
  const router = useRouter();
  const login = async (event) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(router.replace("/dashboard"));
  };

  return (
    <form onSubmit={login}>
      <div className="bg-primary-light h-screen flex items-center justify-center">
        <div className="bg-ivory-light p-4 rounded-lg flex space-y-4 flex-col">
          <h2 className="text-center text-2xl font-bold">Inease</h2>
          <h3 className="text-center text-gray-600 font-semibold">
            Admin login
          </h3>
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
          <button
            type="submit"
            className="p-2 m-3 bg-secondary rounded-full text-white"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
