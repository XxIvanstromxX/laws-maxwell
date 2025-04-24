import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, className, delay = 0.3 }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;