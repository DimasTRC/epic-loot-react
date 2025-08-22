import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring", // spring untuk efek melenting
        stiffness: 120, // kaku/lunak spring (lebih tinggi = lebih cepat dan pop)
        damping: 10, // redaman (lebih rendah = lebih overshoot)
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
