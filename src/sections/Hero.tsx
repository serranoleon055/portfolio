import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { fadeUp } from "../utils/animaciones";


    export default function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center justify-center px-6 py-24"
        >
        <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">

            <motion.p
                {...fadeUp(0)}
                className="text-text-secondary text-lg font-medium tracking-wide"
            >
                Hola, soy
            </motion.p>

            <motion.h1
                {...fadeUp(0.15)}
                className="text-5xl md:text-6xl font-bold text-text-primary leading-tight"
            >
                León Serrano
            </motion.h1>

            <motion.h2
                {...fadeUp(0.3)}
                className="text-2xl md:text-3xl font-semibold text-accent"
            >
                Desarrollador Fullstack
            </motion.h2>

            <motion.p
                {...fadeUp(0.45)}
                className="text-text-secondary text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
            >
                Construyo aplicaciones web completas, del backend al frontend.
                Enfocado en la creacion de APIs con Java y Spring Boot.
            </motion.p>

            <motion.div
                {...fadeUp(0.6)}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
                <a href="#proyectos" className="px-8 py-3 min-w-40 text-center bg-accent text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-colors duration-200">
                Ver proyectos
                </a>
                
                <a href="#contacto" className="px-8 py-3 min-w-40 text-center border border-border text-text-primary font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors duration-200">
                Contacto
                </a>
            </motion.div>

            <motion.div
                {...fadeUp(0.75)}
                className="flex gap-5 justify-center md:justify-start"
            >
                <a  
                href="https://github.com/serranoleon055"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                    <FiGithub size={22} />
                </a>

                <a 
                href="https://www.linkedin.com/in/leonserrano/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200" >
                    <FiLinkedin size={22} />
                </a>
                
                
                <a 
                href="mailto:serranoleon.055@gmail.com"
                aria-label="Email"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                    <FiMail size={22} />
                </a>
            </motion.div>
            </div> 
            <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0"
            >
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border">
                <img
                src="public/foto.jpg"
                alt="León Serrano"
                className="w-full h-full object-cover"
                />
            </div>
            </motion.div>

        </div>
        </section>
    );
}