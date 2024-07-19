"use client";
import Fixed from "@/components/Fixed";

import Carousel from "@/components/Carousel";

import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallary";
import Statics from "@/components/Statics";
export default function Home() {
  return (
    <>
      <Fixed ar={true} />
      <Carousel ar={true} />
      <About ar={true} />
      <Statics ar={true} />
      <Services ar={true} />
      <Gallery />
    </>
  );
}
