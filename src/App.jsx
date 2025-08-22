import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import styles from "./style";
import FadeInSection from "./components/FadeInSection";

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from "./components";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // kecepatan easing (0.1 = lebih smooth)
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <FadeInSection>
              <Hero />
            </FadeInSection>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <FadeInSection delay={0.1}>
              <Stats />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <Business />
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <Billing />
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <CardDeal />
            </FadeInSection>
            <FadeInSection delay={0.5}>
              <Testimonials />
            </FadeInSection>
            <FadeInSection delay={0.6}>
              <Clients />
            </FadeInSection>
            <FadeInSection delay={0.7}>
              <CTA />
            </FadeInSection>
            <FadeInSection delay={0.8}>
              <Footer />
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
