import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md py-8 mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
              Leyes de Maxwell
            </h2>
            <p className="text-gray-400 text-sm">
              Explorando los fundamentos del electromagnetismo
            </p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              {icon: <FaGithub />, url:"https://github.com/XxIvanstromxX"},
              {icon: <FaLinkedin />, url:"https://www.linkedin.com/in/iv%C3%A1n-martinez-791889269/"},
              {icon: <FaXTwitter />, url:"https://x.com/xVan24x"},
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-white text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Leyes de Maxwell. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;