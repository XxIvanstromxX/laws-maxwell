import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

function GaussMagneticLaw() {
  return (
    <AnimatedSection className="min-h-screen py-20 flex items-center relative" delay={0.4}>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1 relative flex items-center justify-center">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-purple-600/30 blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div 
            className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 w-full max-w-lg h-80 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Animación de líneas de campo magnético circular */}
            <div className="absolute inset-0 flex items-center justify-center top-[-45px]">
              {/* Líneas de campo magnético */}
              {Array.from({ length: 5 }).map((_, i) => {
                const size = 60 + i * 40;
                return (
                  <motion.div 
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: size * 1.3,
                      height: size * 1.3,
                      border: '2px solid',
                      borderColor: 'rgba(147, 51, 234, 0.5)',
                      borderRadius: '50%',
                    }}
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 20 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                );
              })}
              
              {/* Flechas para indicar la dirección del campo */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const radius = 110;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle); // Ajustado para la elipse
                
                return (
                  <motion.div 
                    key={`arrow-${i}`}
                    className="absolute w-4 h-4 border-t-2 border-r-2 border-purple-400"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transformOrigin: 'center',
                      transform: `translate(-50%, -50%) rotate(${-45 + (angle * 180/Math.PI)}deg)`,
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                );
              })}
            </div>
            
            {/* Representación del imán */}
            <div className="relative z-10 flex flex-col items-center top-[5%]">
              <div className="w-32 h-16 flex overflow-hidden rounded-lg shadow-lg">
                {/* Polo norte (azul) */}
                <div className="w-1/2 h-full bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center border-r border-gray-800">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
                
                {/* Polo sur (rojo) */}
                <div className="w-1/2 h-full bg-gradient-to-b from-red-600 to-red-800 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
              </div>
              <p className="text-xl font-semibold mt-6">Líneas de campo magnético cerradas</p>
            </div>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="mb-6">
            <span className="text-purple-400 font-semibold">Ley II</span>
            <h2 className="text-4xl font-bold mb-4">Ley de Gauss para el Campo Magnético</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-blue-100/90 mb-6">
              La ley de Gauss para el campo magnético establece que el flujo magnético a través de cualquier superficie cerrada es igual a cero.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl mb-6 overflow-x-auto">
              <code className="text-2xl text-purple-400 font-bold">∮<sub>S</sub> <span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span>·dA = 0</code>
              <br />
              <br />
              <code className="text-2xl text-purple-400 font-bold">∇·<span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span> = 0</code>
            </div>
            
            <p className="mb-4">
              Esta ecuación indica que no existen monopolos magnéticos. A diferencia de las cargas eléctricas, que pueden ser positivas o negativas, 
              en el magnetismo siempre encontramos dipolos (con un polo norte y un polo sur).
            </p>
            
            <h3 className="text-2xl font-semibold mb-2 text-purple-300">Implicaciones</h3>
            <ul className="space-y-2">
              <li>Las líneas de campo magnético siempre forman bucles cerrados</li>
              <li>No existen "cargas magnéticas" aisladas (monopolos magnéticos)</li>
              <li>Si divides un imán, obtendrás dos imanes más pequeños, cada uno con su polo norte y sur</li>
              <li>El flujo magnético total que entra en un volumen siempre es igual al flujo que sale</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default GaussMagneticLaw;