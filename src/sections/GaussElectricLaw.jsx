import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

function GaussElectricLaw() {
  return (
    <AnimatedSection className="min-h-screen py-20 flex items-center relative">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-6">
            <span className="text-blue-400 font-semibold">Ley I</span>
            <h2 className="text-4xl font-bold mb-4">Ley de Gauss para el Campo Eléctrico</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-blue-100/90 mb-6">
              La ley de Gauss establece que el flujo de campo eléctrico a través de una superficie cerrada es proporcional
              a la carga eléctrica contenida en su interior.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl mb-6 overflow-x-auto">
              <code className="text-2xl text-cyan-400 font-bold">∮<sub>S</sub><span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[19px]">→</span></span>·dA = Q<sub>int</sub>/ε₀</code> 
              <br />
              <br />
              <code className="text-2xl text-cyan-400 font-bold">∇·<span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[19px]">→</span></span> = ρ<sub>v</sub>/ε₀</code>
            </div>
            
            <p className="mb-4">
              Esta ley describe la relación entre un campo eléctrico y las cargas que lo producen. El flujo
              eléctrico a través de cualquier superficie cerrada es proporcional a la carga eléctrica
              encerrada por la superficie.
            </p>
            
            <h3 className="text-2xl font-semibold mb-2 text-blue-300">Implicaciones</h3>
            <ul className="space-y-2">
              <li>Las líneas de campo eléctrico se originan en cargas positivas y terminan en cargas negativas</li>
              <li>El campo eléctrico decrece con el inverso del cuadrado de la distancia de una carga puntual</li>
              <li>Permite calcular campos eléctricos en situaciones de alta simetría</li>
            </ul>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div 
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 w-full max-w-lg h-80 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Simulación visual del campo eléctrico */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 80 }).map((_, i) => {
                const angle = Math.random() * 360;
                const length = 50 + Math.random() * 100; // Líneas más largas
                return (
                  <motion.div 
                    key={i}
                    className="absolute w-1 bg-gradient-to-t from-blue-400/0 to-blue-400"
                    style={{
                      left: 'calc(50% - 1px)', // Centrado exacto
                      top: 'calc(50% - 25px)', // Ajustado para alinear con el centro de la carga
                      height: `${length}px`, // Unidades absolutas para evitar problemas al hacer scroll
                      rotate: `${angle}deg`,
                      transformOrigin: 'top center' // Origen de transformación en el punto central
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: [0, 1, 0.8],
                      opacity: [0.1, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2
                    }}
                  />
                );
              })}
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 mx-auto mb-4 shadow-lg shadow-yellow-500/30 flex items-center justify-center">
                <span className="text-lg font-bold">+</span>
              </div>
              <p className="text-xl font-semibold">Campo eléctrico de una carga puntual</p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default GaussElectricLaw;