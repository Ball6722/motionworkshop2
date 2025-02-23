import Explore from "@/components/Explore/Explore";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Journal from "@/components/Journal/Journal";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  const bgImage:React.CSSProperties = {
    backgroundImage: "url('/assets/hero.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }
  return (
    <>
      <div className="overflow-x-hidden bg-brandDark text-white">
        {/* foreground Content */}
        <div style={bgImage}>
          <Navbar />
          <Hero />
        </div>

        <Explore />
        <Journal />
        <Footer />

      </div>
    </>
  );
}
