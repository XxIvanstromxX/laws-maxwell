import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ">
      {/* Efecto de partículas flotantes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-70"
          animate={{
            x: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
            y: [Math.random() * 800 - 400, Math.random() * 800 - 400],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container px-6 mx-auto text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Las Ecuaciones de Maxwell
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-100/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Los cuatro pilares que unificaron electricidad y magnetismo, 
          transformando nuestra comprensión del universo para siempre.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30">
            Explorar las Leyes
          </button>
        </motion.div>

        {/* Fórmulas flotantes */}
        <motion.div
          className="absolute opacity-20 text-4xl top-[-45%] left-[10%]"
          animate={{ y: [0, -20, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ∇×<span className="relative">B<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span> = μ₀J + μ₀ε₀∂<span className="relative">E<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span>/∂t
        </motion.div>

        <motion.div
          className="absolute opacity-20 text-4xl top-[-20%] right-[15%]"
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ∇⋅<span className="relative">E<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span> = ρ/ε₀
        </motion.div>
        
        <motion.div
          className="absolute opacity-20 text-4xl bottom-[8%] left-[10%]"
          animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          ∇×<span className="relative">E<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span> = -∂<span className="relative">B<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span>/∂t
        </motion.div>

        <motion.div 
          className="absolute opacity-20 text-4xl"
          style={{ bottom: '-30%', right: '15%' }}
          animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ∇⋅<span className="relative">B<span className="absolute top-[-0.5em] left-0 right-0 text-center text-[22px]">→</span></span> = 0
        </motion.div>
      </div>

      {/* Flecha de scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-8 border-b-2 border-r-2 border-blue-400 transform rotate-45 opacity-70"></div>
      </motion.div>
    </section>
  );
}

export default Hero;