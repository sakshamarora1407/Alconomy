import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Footer from  "../../components/ui/Footer";

function Hero() {
  return (
    <section className="h-[150vh] bg-gray flex items-center flex-col">
      <h1 className="md:text-[6rem] font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent background-animate">
        Alconomy
      </h1>

      <div className="flex flex-col overflow-hidden -translate-y-40 ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Manage your Money with AI-Driven Personal <br />
              <span className="text-4xl md:text-[6rem] text-blue-800 font-bold leading-none">
                Finance Tracker
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/dashboard.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>

          <Footer />
    </section>
  );
}

export default Hero;
