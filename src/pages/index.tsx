import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import CTA from "@/components/CTA";
import HeroImage from "@/components/HeroImage";
import XLHeroImage from "@/components/XLHeroImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-white">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
          <div>
            {/* Standard Logo */}
            <div className="xl:hidden mt-5 flex justify-center items-center">
              <Logo width={70} height={70} />
            </div>
            {/* Large (XL+) Logo */}
            <div className="hidden xl:flex mb-5 justify-center items-center">
              <Logo width={86} height={86} />
            </div>

            <div className="flex flex-col gap-y-10 items-center justify-center">
              <div className="">
                <Hero/>
              </div>
              <div className="md:hidden xl:block max-w-[32rem]">
                <Quote/>
              </div>
              <div className="xl:mt-[10px]">
                <CTA/>
              </div>
            </div>
          </div>

          {/* For md */}
          <div className="hidden md:block xl:hidden">
            <Quote/>
          </div>
          
          {/* For xl */}
          <div className="hidden xl:block relative h-screen overflow-hidden">
            <XLHeroImage />
          </div>
        </div>

        {/* MD - Image*/}
        <div className="hidden md:block mt-10 xl:hidden">
          <HeroImage/>
        </div>
      </div>
      

    </main>
  );
}
