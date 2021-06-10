import "../styles/index.css";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
      <footer></footer>
    </div>
  );
}

export default MyApp;
