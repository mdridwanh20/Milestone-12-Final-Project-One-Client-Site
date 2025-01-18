import React from 'react'
import Banner from '../Component/Home/Banner'
import Order_Card_Swiper from '../Component/Home/Order_Card_Swiper'
import Section_title from '../Component/Common/Section_title'
import From_menu from '../Component/Home/From_menu'
import SecondMenu from '../Component/Home/SecondMenu'
import Testimonials from '../Component/Home/Testimonials'


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Section_title></Section_title>
      <Order_Card_Swiper></Order_Card_Swiper>
      <From_menu></From_menu>
      <SecondMenu></SecondMenu>
      <Testimonials></Testimonials>
    </div>
  )
}
