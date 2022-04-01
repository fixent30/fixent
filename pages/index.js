import Head from 'next/head'
import { useEffect, useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import getCollectionData from '../utils/getCollectionData'
import Cart from '../components/Cart'
import { auth } from '../utils/firebase'
import { useUser } from '../Redux/useStore'

const Home = ({ productsData }) => {
  const [open, setOpen] = useState(false)

  const login = useUser((state) => state.login)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        login(user)
      }
    })
  }, [])

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
        <Header isHome open={open} setOpen={setOpen} />
        <Hero />
        <About />
        <Services />
        {productsData && <Products products={productsData} />}
        <Contact />
        <Cart open={open} setOpen={setOpen} />
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getCollectionData('Products')
  const json = JSON.stringify(res)
  const productsData = JSON.parse(json)
  return {
    props: {
      productsData,
    },
  }
}

export default Home
