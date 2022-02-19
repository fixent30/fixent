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
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../Redux/UserSlice'

const Home = ({ productsData }) => {
  const [open, setOpen] = useState(false)
  const state = useSelector((state) => state.basket.items)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

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
        <Header open={open} setOpen={setOpen} />
        <Hero />
        <About />
        {productsData && <Products products={productsData} />}
        <Services />
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
