import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن (اختیاری)
      once: false, // فقط یک بار انیمیشن را اجرا کند (اختیاری)
    });
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
