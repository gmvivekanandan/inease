import "../styles/index.css";
import { useState } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <Navigation click={toggleActive} active={active} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
