import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
};
export default Home;
