import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:flex justify-between items-center">
        <motion.div
          className="flex md:items-center md:gap-2 justify-center"
          whileHover={{ scale: 1.05 }}
        >
          
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Leyes de Maxwell
          </h1>
        </motion.div>

        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center">
            {[
              <>Gauss ( <span className="relative">E<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[10px]">→</span></span> )</>,
              <>Gauss ( <span className="relative">B<span className="absolute top-[-0.7em] left-0 right-0 text-center text-[10px]">→</span></span> )</>,
              'Faraday',
              'Ampere-Maxwell'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-sm text-indigo-300 cursor-pointer hover:text-indigo-500"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;