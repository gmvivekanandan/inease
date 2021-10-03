import Link from "next/link";

export default function Dashboard() {
  return (
    <div class="bg-gray-50 h-screen flex flex-col mx-auto w-full items-center justify-center">
      <ul class="flex flex-col">
        <Link href="/categories">
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div class="flex-1 pl-1 md:mr-16">
                <div class="font-medium dark:text-white">Categories</div>
                <div class="text-gray-600 dark:text-gray-200 text-sm">
                  Add,delete categories
                </div>
              </div>
              <button class="w-24 text-right flex justify-end">
                <svg
                  width="12"
                  fill="currentColor"
                  height="12"
                  class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
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
          <li class="border-gray-400 flex flex-row mb-2">
            <div class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div class="flex-1 pl-1 md:mr-16">
                <div class="font-medium dark:text-white">Products</div>
                <div class="text-gray-600 dark:text-gray-200 text-sm">
                  Add,delete products
                </div>
              </div>
              <button class="w-24 text-right flex justify-end">
                <svg
                  width="12"
                  fill="currentColor"
                  height="12"
                  class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
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
    </div>
  );
}
