import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

function FaradayLaw() {
  return (
    <AnimatedSection className="min-h-screen py-20 flex items-center relative" delay={0.5}>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-6">
            <span className="text-green-400 font-semibold">Ley III</span>
            <h2 className="text-4xl font-bold mb-4">Ley de Inducción de Faraday</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-blue-100/90 mb-6">
              La ley de Faraday establece que un campo magnético variable en el tiempo induce un campo eléctrico.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl mb-6 overflow-x-auto">
              <code className="text-2xl text-green-400 font-bold">∮<sub>C</sub> <span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span>·dl = -d/dt(∮<sub>S</sub><span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span>·dA)</code>
              <br />
              <br />
              <code className="text-2xl text-green-400 font-bold">∇×<span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span> = -d<span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[0.85em]">→</span></span>/dt</code>
            </div>
            
            <p className="mb-4">
              Esta ley describe cómo un campo magnético cambiante genera un campo eléctrico. La fuerza electromotriz
              inducida en un circuito cerrado es igual a la tasa de cambio del flujo magnético que atraviesa el circuito.
            </p>
            
            <h3 className="text-2xl font-semibold mb-2 text-green-300">Aplicaciones</h3>
            <ul className="space-y-2">
              <li>Generadores eléctricos que convierten energía mecánica en eléctrica</li>
              <li>Transformadores que transfieren energía entre circuitos mediante inducción</li>
              <li>Motores eléctricos (junto con la ley de Ampere)</li>
              <li>Tarjetas de crédito y discos duros que almacenan información magnéticamente</li>
            </ul>
            
            <p className="mt-6">
              El signo negativo en la ecuación representa la <strong>Ley de Lenz</strong>: la corriente inducida fluye en una dirección
              tal que el campo magnético que crea se opone al cambio del flujo magnético que la produjo.
            </p>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-green-500/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div 
            className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 w-full max-w-lg flex items-center justify-center relative overflow-hidden h-80"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10">
              {/* Simulación visual de inducción electromagnética */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-40 h-10 border-2 border-gray-300 rounded-md mb-8 flex items-center justify-center"
                  animate={{ x: [0, 20, 0, -20, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-blue-600"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(59, 130, 246, 0.5)",
                        "0 0 15px rgba(59, 130, 246, 0.8)",
                        "0 0 0 rgba(59, 130, 246, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-xs flex justify-center items-center h-full">N</span>
                  </motion.div>
                  <div className="w-4"></div>
                  <motion.div 
                    className="w-8 h-8 rounded-md bg-gradient-to-r from-red-500 to-red-600"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(239, 68, 68, 0.5)",
                        "0 0 15px rgba(239, 68, 68, 0.8)",
                        "0 0 0 rgba(239, 68, 68, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-xs flex justify-center items-center h-full">S</span>
                  </motion.div>
                </motion.div>
                
                {/* Bobina */}
                <div className="w-32 h-32 border-8 border-gray-400 rounded-full relative">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="absolute top-1/2 w-full h-1 -translate-y-1/2"
                      style={{ 
                        rotate: `${i * 22.5}deg`,
                        transformOrigin: "center"
                      }}
                    >
                      <motion.div 
                        className="w-1 h-1 rounded-full bg-green-400"
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.25
                        }}
                      />
                      <motion.div 
                        className="absolute right-0 w-1 h-1 rounded-full bg-green-400"
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.25 + 1
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-4 w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center"
                  animate={{
                    borderColor: ["#9CA3AF", "#10B981", "#9CA3AF"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xs">V</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default FaradayLaw;