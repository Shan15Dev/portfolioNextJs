import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-slate-800 flex flex-col min-h-screen" id="root">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
