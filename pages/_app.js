import "../styles/globals.css";
import "../styles/fonts.css";
import { Bounce, ToastContainer } from "react-toastify";
// import { useEffect } from "react";
// import connectDB from "@/utils/connectDB";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   // فراخوانی تابع connectDB برای اتصال به دیتابیس و Cloudinary
  //   const initializeConnections = async () => {
  //     try {
  //       await connectDB();
  //       console.log("!------- All connections are established -------!");
  //     } catch (err) {
  //       console.error("!------- Error in establishing connections -------!", err);
  //     }
  //   };

  //   initializeConnections();
  // }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}
