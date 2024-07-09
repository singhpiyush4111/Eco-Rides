
import Hero from "@/components/home/Hero";
import Main from "@/components/home/Main";
import Navbar from "@/components/utils/Navbar";
import ProductCard from "@/components/utils/ProductCard";
import TopNavBar from "@/components/utils/TopNavbar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <Navbar />
      <Hero />
      <ProductCard/>
      <Main/>
    </>

  );
}
