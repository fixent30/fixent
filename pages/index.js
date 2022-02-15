import Head from 'next/head'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { db } from '../utils/firebase'
import getCollectionData from '../utils/getCollectionData'

const Home = () => {
  const [ProductsList, setProductsList] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await getCollectionData('Products')
      setProductsList(res)
    }
    getProducts()
  }, [db])

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Fixent-(computer Reparing Site)</title>
        <meta
          name="description"
          content="Fixent is a site for Computer Reparing Shop"
        />
      </Head>
      <main className="px-2">
        <Header />
        <Hero />
        <About />
        {ProductsList && <Products products={ProductsList} />}
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
