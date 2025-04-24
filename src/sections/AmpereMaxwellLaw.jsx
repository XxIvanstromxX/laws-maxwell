import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

function AmpereMaxwellLaw() {
  return (
    <AnimatedSection className="min-h-screen py-20 flex items-center relative" delay={0.6}>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="order-2 lg:order-1 relative flex items-center justify-center">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-amber-500/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div 
            className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 w-full max-w-lg h-80 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center">
                {/* Animación de corriente y campo magnético */}
                <div className="relative mb-8">
                  <motion.div 
                    className="w-40 h-1 bg-gradient-to-r from-amber-400 to-amber-500"
                    animate={{
                      boxShadow: ['0 0 5px rgba(251, 191, 36, 0.5)', '0 0 20px rgba(251, 191, 36, 0.8)', '0 0 5px rgba(251, 191, 36, 0.5)']
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  {/* Partículas fluyendo para representar corriente */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute top-0 h-1 w-3 bg-white rounded-full"
                      initial={{ x: -50 }}
                      animate={{ x: 150 }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.25,
                        ease: "linear"
                      }}
                    />
                  ))}
                  
                  {/* Campos magnéticos en círculo */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div 
                      key={`field-${i}`}
                      className="absolute w-24 h-24 rounded-full border border-amber-400/40"
                      style={{ 
                        top: -12,
                        left: (i * 10) - 20,
                      }}
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </div>
                
                <div className="text-center mb-6">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-md mb-2">
                    <span className="text-amber-400">I</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-mono">+</span>
                    <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-md">
                      <span className="text-blue-400">dE/dt</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-center text-gray-300">
                  Corriente + Campo eléctrico variable<br/>
                  generan campo magnético
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="mb-6">
            <span className="text-amber-400 font-semibold">Ley IV</span>
            <h2 className="text-4xl font-bold mb-4">Ley de Ampere-Maxwell</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-blue-100/90 mb-6">
              La ley de Ampere-Maxwell establece que un campo magnético puede ser generado por una corriente eléctrica y por un campo eléctrico variable.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl mb-6 overflow-x-auto">
              <code className="text-2xl text-amber-400 font-bold">∮<sub>C</sub> B·dl = μ₀I + μ₀ε₀d/dt(∮<sub>S</sub><span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[22px]">→</span></span>·dA)</code>
              <br />
              <br />
              <code className="text-2xl text-amber-400 font-bold">∇×<span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[22px]">→</span></span> = μ₀<span className="relative">J<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[22px]">→</span></span> + μ₀ε₀d<span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[22px]">→</span></span>/dt</code>
            </div>
            
            <p className="mb-4">
              La versión original de Ampere relacionaba solamente campos magnéticos con corrientes eléctricas. Maxwell 
              la completó añadiendo el término de corriente de desplazamiento (campo eléctrico variable), haciendo 
              que las ecuaciones fueran consistentes.
            </p>
            
            <h3 className="text-2xl font-semibold mb-2 text-amber-300">La pieza final del rompecabezas</h3>
            <p className="mb-4">
              Este término adicional fue clave para que Maxwell predijera la existencia de ondas electromagnéticas que 
              viajan a la velocidad de la luz, unificando así la electricidad, el magnetismo y la óptica.
            </p>
            
            <h3 className="text-2xl font-semibold mb-2 text-amber-300">Aplicaciones</h3>
            <ul className="space-y-2">
              <li>Comunicación inalámbrica (radio, TV, Wi-Fi)</li>
              <li>Funcionamiento de antenas y transmisores</li>
              <li>Base teórica para comprender la propagación de la luz</li>
              <li>Desarrollo de tecnologías como radares y microondas</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default AmpereMaxwellLaw;