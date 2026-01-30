import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0.1, duration = 0.8 }) => {
  const variants = {
    // Movimento mais sutil
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ 
        // 0.8s para mais suavidade
        duration: duration, 
        delay: delay, 
        ease: "easeOut" 
      }}
      viewport={{ 
        once: true, 
        // Aciona quando 50% do elemento está visível
        amount: 0.5 
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;