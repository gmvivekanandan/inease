import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "../config/firebase";
import { useState } from "react";

export default function Dashboard() {
  const [user, changeUser] = useState(false);
  const router = useRouter();
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      changeUser(true);
    } else {
      router.push("/login");
    }
  });

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Logout successful");
      });
  };
  if (user) {
    return (
      <div className="bg-gray-50 flex flex-col items-center justify-center p-2 gap-4">
        <ul>
          <Link href="/categories">
            <li className="border-gray-400 flex flex-row mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium dark:text-white">Categories</div>
                  <div className="text-gray-600 dark:text-gray-200 text-sm">
                    Add,delete categories
                  </div>
                </div>
                <button className="w-24 text-right flex justify-end">
                  <svg
                    width="12"
                    fill="currentColor"
                    height="12"
                    className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </li>
          </Link>
          <Link href="/products">
            <li className="border-gray-400 flex flex-row mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium dark:text-white">Products</div>
                  <div className="text-gray-600 dark:text-gray-200 text-sm">
                    Add,delete products
                  </div>
                </div>
                <button className="w-24 text-right flex justify-end">
                  <svg
                    width="12"
                    fill="currentColor"
                    height="12"
                    className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </li>
          </Link>
        </ul>
        <div className="p-5 flex justify-center">
          <button
            className="bg-red-500 p-2 w-full rounded-full text-white"
            type="button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
}
