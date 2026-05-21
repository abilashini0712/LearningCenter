import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSection";
import InstituteInfo from "@/components/Info";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <InstituteInfo/>
      <Footer/>
    </div>
  );
}
