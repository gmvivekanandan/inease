import firebase from "../config/firebase";

export default function Categories(props) {
  const submit = async (event) => {
    event.preventDefault();
    const res = await firebase
      .firestore()
      .collection("category")
      .doc(event.target.category.value)
      .set({ id: event.target.category.value });
  };

  const remove = async (event) => {
    const res = await firebase
      .firestore()
      .collection("category")
      .doc(event)
      .delete();
  };
  return (
    <div className="flex flex-col p-4">
      <form onSubmit={submit}>
        <div className="flex">
          <div class="mt-1 flex rounded-md shadow-sm mr-2">
            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              Add Category
            </span>
            <input
              type="text"
              name="category"
              id="category"
              className="border border-gray-300 flex-1 block w-full rounded-r-md sm:text-sm pl-1"
              placeholder="Category"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
      </form>
      <h1 className="text-2xl text-center my-2">Categories</h1>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {Object.keys(props).map((item) => (
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props[item]}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a
                  href="#"
                  class="text-red-600 hover:text-red-500"
                  onClick={() => remove(props[item])}
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
}

export async function getStaticProps() {
  var list = [];
  const res = await firebase.firestore().collection("category").get();
  res.docs.forEach((doc) => {
    list.push(doc.id);
  });
  const obj = { ...list };
  return { props: obj };
}
