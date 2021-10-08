import Image from "next/image";
import { useRouter } from "next/router";
import firebase from "../config/firebase";

export default function Detail(post) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-auto sm:h-screen flex justify-center items-center bg-ivory-dark">
      <div className="flex flex-col rounded-md sm:flex-row bg-ivory-light">
        <Image
          src={post.imageurl}
          alt="tee"
          width={275}
          height={400}
          className="rounded-l-md"
        />
        <div className="flex flex-col p-2 space-y-2">
          <h1 className="text-xl text-gray-800 font-bold">{post.name}</h1>
          <p className="w-auto sm:w-96 overflow-auto flex-grow">{post.price}</p>
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

export async function getStaticPaths() {
  const res = await firebase.firestore().collection("all").get();
  const posts = await res.docs;
  const paths = posts.map((post) => ({
    params: { detail: post.id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await firebase
    .firestore()
    .collection("all")
    .doc(params.detail)
    .get();
  const post = res.data();
  return { props: post, revalidate: 10 };
}
