"use client";

import Fixed from "@/components/Fixed";

import Carousel from "@/components/Carousel";

import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallary";
import Statics from "@/components/Statics";
import Previous from "@/components/Previous";
export default function Home() {
  return (
    <>
      <Fixed />
      <Carousel />
      <About />
      <Statics />
      <Services />
      <Previous />
      <Gallery />
    </>
  );
}
