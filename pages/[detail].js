import Image from "next/image";
import { useRouter } from "next/router";
import firebase from "../config/firebase";

export default function Detail(post) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
  return (
    <div className="h-screen mt-4 sm:mt-0 sm:h-screen flex justify-center items-center bg-primary-light">
      <div className="flex flex-col rounded-md sm:flex-row bg-ivory-light">
        <Image
          src={post.imageurl}
          alt="tee"
          width={325}
          height={400}
          className="rounded-md sm:rounded-l-md"
        />
        <div className="flex flex-col p-2 space-y-2">
          <h1 className="text-2xl font-bold text-secondary">{post.name}</h1>
          <p className="w-auto sm:w-96 overflow-auto text-black">{post.desc}</p>
          <p className="w-auto sm:w-96 overflow-auto flex-grow text-2xl font-bold">
            ${post.price}
          </p>
          <div className="p-5 flex justify-center">
            <button
              className="bg-dusty p-2 w-full rounded-full text-white bg-secondary"
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
