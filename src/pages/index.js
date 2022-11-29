import React from "react";
import Hero from "../components/Hero/Hero";
import NewProducts from "../components/NewProducts/NewProducts";
import Banners from "../components/Banners/Banners";
import Comment from "../components/Comment/Comment";
import News from "../components/News/News";
import Newsletter from "../components/Newsletter/Newsletter";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Hero />
      <NewProducts />
      <Banners />
      <Comment />
      <News />
      <Newsletter />
    </>
  )
}

