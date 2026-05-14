import { motion } from "framer-motion";
import { fadeUpOnView } from "../utils/animaciones";

const stats = [
    { valor: "4°", etiqueta: "Año en curso" },
    { valor: "2026", etiqueta: "Título intermedio Analista en Sist. de Computacion" },
    { valor: "Siglo 21", etiqueta: "Universidad" },
];


export default function SobreMi() {
    return (
        <section id="sobre-mi" className="min-h-screen w-full py-24 px-6 flex items-center justify-center">
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-16">

                <motion.div {...fadeUpOnView()} className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-text-primary">
                        <span className="text-accent">{"// "}</span>Sobre mí
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                </motion.div>


                <div className="flex flex-col md:flex-row gap-12 md:gap-16">


                <div className="flex-1 flex flex-col gap-5">
                    <motion.p
                    {...fadeUpOnView(0.1)}
                    className="text-text-secondary text-lg leading-relaxed"
                    >
                        Soy desarrollador fullstack de Santiago del Estero, Argentina, 
                        estudiando Licenciatura en Informática en la Universidad Siglo 21. 
                        Construyo aplicaciones completas: desde APIs REST con Java y Spring Boot 
                        — autenticación JWT, roles, JPA/Hibernate, MySQL — hasta interfaces 
                        con React y TypeScript.
                    </motion.p>

                    <motion.p
                    {...fadeUpOnView(0.2)}
                    className="text-text-secondary text-lg leading-relaxed"
                    >
                        Me tomo en serio la calidad: escribo tests con JUnit y Mockito, 
                        aplico arquitectura en capas y me preocupo por que el código sea 
                        mantenible, no solo que funcione.
                    </motion.p>

                    <motion.p
                    {...fadeUpOnView(0.3)}
                    className="text-text-secondary text-lg leading-relaxed"
                    >
                        Busco mi primer rol profesional donde pueda aportar desde el día uno 
                        y crecer junto a un equipo. Soy autodidacta, metódico, y me tomo en 
                        serio tanto la calidad del código como los plazos.
                    </motion.p>
                </div>


                <motion.div
                    {...fadeUpOnView(0.2)}
                    className="flex flex-col gap-4 md:w-56"
                >
                    {stats.map((stat) => (
                    <div
                        key={stat.etiqueta}
                        className="bg-bg-secondary border border-border rounded-xl px-6 py-5 flex flex-col gap-1 items-center justify-center"
                    >
                        <span className="text-2xl font-bold text-accent">
                        {stat.valor}
                        </span>
                        <span className="text-text-secondary text-sm text-center">
                        {stat.etiqueta}
                        </span>
                    </div>
                    ))}
                </motion.div>

                </div>
            </div>
        </section>
    );
}