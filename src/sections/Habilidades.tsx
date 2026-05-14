import { motion } from "framer-motion";
import { habilidades } from "../data/habilidades";
import { fadeUpOnView } from "../utils/animaciones";


export default function Habilidades() {
    return (
        <section id="habilidades" className="min-h-9/12 w-full py-24 px-6 flex items-center justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-16">

                <motion.div {...fadeUpOnView()} className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-text-primary">
                        <span className="text-accent">{"// "}</span>Habilidades
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {habilidades.map((cat, catIndex) => (
                    <motion.div
                    key={cat.categoria}
                    {...fadeUpOnView(catIndex * 0.15)}
                    className="flex flex-col gap-5"
                    >

                    <h3 className="text-accent font-semibold text-sm uppercase tracking-widest">
                        {cat.categoria}
                    </h3>


                    <div className="flex flex-wrap gap-3">
                        {cat.skills.map((skill) => (
                        <div
                            key={skill.nombre}
                            className="flex items-center gap-2 bg-bg-secondary border border-border rounded-lg px-3 py-2 text-text-secondary text-sm hover:border-accent hover:text-text-primary transition-colors duration-200"
                        >
                            <skill.icono size={15} />
                            <span>{skill.nombre}</span>
                        </div>
                        ))}
                    </div>
                    </motion.div>
                ))}
                </div>

            </div>
        </section>
    );
}