import { motion } from "framer-motion";
import { proyectos } from "../data/proyectos";
import ProyectoCard from "../components/ProyectoCard";
import { fadeUpOnView } from "../utils/animaciones";


export default function Proyectos() {
    return (
        <section id="proyectos" className="w-full py-24 px-6 flex items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-16">

            <motion.div {...fadeUpOnView()} className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-text-primary">
                    <span className="text-accent">{"// "}</span>Proyectos
                </h2>
                <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proyectos.map((proyecto, index) => (
                <motion.div
                key={proyecto.nombre}
                {...fadeUpOnView(index * 0.15)}
                >
                <ProyectoCard proyecto={proyecto} />
                </motion.div>
            ))}
            </div>

        </div>
        </section>
    );
}