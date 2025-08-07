import React from 'react'
import Dropdownlist from '../components/Dropdownlist'
import HeroCarousel from '../components/HeroCarousel'
import Hero2 from '../components/Hero2'
import Shopbyprice from '../components/Shopbyprice'
import Shopbycat from '../components/Shopbycat'
import Review from '../components/Review'
import SignupBanner from '../components/SignupBanner'


function Home({ productdata, setrproductdata,setproductdetails }) {
  return (
    <div >
      <Dropdownlist productdata={productdata} setrproductdata={setrproductdata}/>
      <HeroCarousel />
      <Hero2 productdata={productdata} setrproductdata={setrproductdata} setproductdetails={setproductdetails}/>
      <Shopbyprice productdata={productdata} setrproductdata={setrproductdata}/>
      <Shopbycat productdata={productdata} setrproductdata={setrproductdata}/>
      <Review/>
      <SignupBanner/>
    </div>
  )
}

export default Home