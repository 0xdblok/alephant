import Image from "next/image";
import Hero from "./component/Hero";
import Buy from "./component/Buy";
import About from "./component/About";
import FAQ from "./component/FAQ";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Buy />
      <About />
      <FAQ />
    </div>
  );
}
