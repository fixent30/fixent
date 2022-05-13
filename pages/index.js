import Head from "next/head";

import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import getCollectionData from "../utils/getCollectionData";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchproducts = async () => {
    const products = await getCollectionData("Products");
    setProducts(products);
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="w-full min-h-screen ">
      <Head>
        <title>Fixent-(computer Reparing Site)</title>
        <meta
          name="description"
          content="Fixent is a site for Computer Reparing Shop"
        />
      </Head>
      <main className="px-2">
        <Header productData={products} isHome />
        <Hero />
        <About />
        <Services />
        {products && <Products products={products} />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
