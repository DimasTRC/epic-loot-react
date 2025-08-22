import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#D8CFD7] `}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[#3B3B3B] text-[18px] leading-[23px]mb-1 feature-card-text">{title}</h4>
      <p className="font-poppins font-normal text-[#3B3B3B] text-[16px] leading-[24px]mb-1 text-opacity-70 feature-card-text">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You choose the style, <br className="sm:block hidden" /> we’ll build the keyboard.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right custom parts from Epic Loot, you can design your dream keyboard, enhance comfort, and express your personality. Everything you need, all in one place.</p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
