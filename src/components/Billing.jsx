import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily customize <br className="hidden sm:block" /> your keyboard.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Browse switches, keycaps, and accessories in one place. Design your perfect setup, track your orders, and shop with ease—anytime, anywhere.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
