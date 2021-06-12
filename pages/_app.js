import "../styles/index.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
