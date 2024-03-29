import firebase from "../config/firebase";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Products(props) {
  const [user, changeUser] = useState(false);
  const [loading, changeLoading] = useState(true);
  const router = useRouter();
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      changeUser(true);
      changeLoading(false);
    } else {
      changeLoading(false);
    }
  });

  const submit = async (event) => {
    event.preventDefault();

    const file = document.querySelector("#fileupload").files[0];

    const imageRef = await firebase
      .storage()
      .ref()
      .child(file.name)
      .put(file)
      .then(alert("File uploaded"));

    const fileURL = await firebase
      .storage()
      .ref()
      .child(file.name)
      .getDownloadURL();

    const res = await firebase
      .firestore()
      .collection("all")
      .doc()
      .set({
        name: event.target.productname.value,
        price: event.target.price.value,
        desc: event.target.productdesc.value,
        imageurl: fileURL,
        filename: file.name,
      })
      .then(alert("Saved successfully, refresh to view changes"));
  };

  const remove = async (event) => {
    const doc = await firebase.firestore().collection("all").doc(event).get();
    const fileName = doc.data().filename;
    await firebase
      .storage()
      .ref(fileName)
      .delete()
      .then(alert("Image deleted"));
    const res = await firebase
      .firestore()
      .collection("all")
      .doc(event)
      .delete()
      .then(alert("Removed successfully, refresh to view changes"));
  };
  if (loading) {
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col p-2 bg-primary-light h-screen">
        <form onSubmit={submit}>
          <div className="flex flex-col gap-2">
            <div className="mt-1 flex rounded-md shadow-sm mr-2">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Add Name
              </span>
              <input
                type="text"
                name="productname"
                id="productname"
                className="border border-gray-300 flex-1 block w-full rounded-r-md sm:text-sm pl-1"
                placeholder="Name"
              />
            </div>
            <div className="mt-1 flex rounded-md shadow-sm mr-2">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Add Name
              </span>
              <input
                type="text"
                name="productdesc"
                id="productdesc"
                className="border border-gray-300 flex-1 block w-full rounded-r-md sm:text-sm pl-1"
                placeholder="Description"
              />
            </div>
            <div className="mt-1 flex rounded-md shadow-sm mr-2">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Add Price
              </span>
              <input
                type="text"
                name="price"
                id="price"
                className="border border-gray-300 flex-1 block w-full rounded-r-md sm:text-sm pl-1"
                placeholder="Price"
              />
            </div>
            <input id="fileupload" name="fileupload" type="file" />
            <button
              type="submit"
              className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-min"
            >
              Add
            </button>
          </div>
        </form>
        <h1 className="text-2xl text-center my-2">Products</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(props).map((item) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={props[item].imageurl}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {props[item].name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {props[item].price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-500"
                    onClick={() => remove(props[item].id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div class=" flex flex-col justify-center items-center">
        <h1>403 Forbidden</h1>
        <Link href="login">
          <button className="rounded-lg bg-blue-500 p-2 text-white">
            Login
          </button>
        </Link>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const list = [];
  const res = await firebase.firestore().collection("all").get();
  res.docs.forEach((doc) => {
    const newData = { ...doc.data(), id: doc.id };
    list.push(newData);
  });
  const obj = { ...list };
  return { props: obj };
}
