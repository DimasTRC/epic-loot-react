import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 border-[2px] rounded-[10px] mb-2" style={{ borderColor: "#72160D" }}>
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`} style={{ color: "#72160D" }}>
          <span className="text-[#72160D] font-bold">20%</span> Discount For <span className="text-[#72160D] font-bold">1 Month</span> Member
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-[48px] sm:text-[52px] lg:text-[72px] text-[#3B3B3B] leading-[64px] sm:leading-[75px] lg:leading-[100px]">
          We'll build <br /> <span className="text-gradient">The Ultimate</span>
        </h1>

        <div className="ss:flex hidden ml-auto">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold text-[48px] sm:text-[52px] lg:text-[68px] text-[#3B3B3B] leading-[64px] sm:leading-[75px] lg:leading-[100px] w-full">keyboard for u</h1>

      <p className={`${styles.paragraph} max-w-[500px] mt-5`} style={{ color: "#3B3B3B" }}>
        Level up your keyboard today and customize with us confidently! Where passionate enthusiasts design, build, and collect their unique keyboard together.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-full h-full object-cover transition-transform duration-500 scale-[120%]" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter} md:ml-10 ml-4`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
