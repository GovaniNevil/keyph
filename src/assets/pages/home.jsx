import React from 'react'
import Header from '../component/header'
import Video from '../component/video'
import About from '../component/about'
import Solution from '../component/solution'
import Banefits from '../component/banefits'
import Products from '../component/product'
import Freedom from '../component/freedom'
import Commitment from '../component/commitment'
import Contact from '../component/contact'
import Footer from '../component/footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Video />
      <About />
      <Solution />
      <Banefits />
      <Products />
      <Freedom />
      <Commitment />
      <Footer/>
    </div>
  )
}

export default Home
