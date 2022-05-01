import { useEffect } from "react";
import { useUser } from "../Redux/useStore";
import "../styles/globals.css";
import { auth } from "../utils/firebase";

function MyApp({ Component, pageProps }) {
  const setUser = useUser((state) => state.setUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
