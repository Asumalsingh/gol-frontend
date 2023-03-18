import Navbar from "../components/Navbar";
import UserProvider from "../context/UserProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div
        className="fixed top-0 left-0 right-0 h-40 sm:h-60 z-30 px-5"
        style={{
          background:
            "linear-gradient(180deg, #E5F8FE 14.25%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <Navbar />
      </div>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
