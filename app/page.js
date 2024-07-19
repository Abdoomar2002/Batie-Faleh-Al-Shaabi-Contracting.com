"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Fixed from "@/components/Fixed";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import WOW from "wowjs";
import { useEffect } from "react";
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
