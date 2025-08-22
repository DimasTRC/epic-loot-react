import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>Upgrade your Keyboard!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>Everything you need to customize, upgrade, and complete your keyboard essentials—all in one place.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="bg-blue-gradient-2" />
    </div>
  </section>
);

export default CTA;
