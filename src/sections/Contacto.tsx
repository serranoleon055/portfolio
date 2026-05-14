import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { fadeUpOnView } from "../utils/animaciones";

const links = [
    {
        label: "Email",
        valor: "serranoleon.055@gmail.com",
        href: "mailto:serranoleon.055@gmail.com",
        icono: FiMail,
    },
    {
        label: "LinkedIn",
        valor: "linkedin.com/in/leonserrano",
        href: "https://www.linkedin.com/in/leonserrano/",
        icono: FiLinkedin,
    },
    {
        label: "GitHub",
        valor: "github.com/serranoleon055",
        href: "https://github.com/serranoleon055",
        icono: FiGithub,
    },
];

export default function Contacto() {
    return (
        <section id="contacto" className="w-full py-24 px-6 flex items-center justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-16">

                <motion.div {...fadeUpOnView()} className="flex items-center gap-4">
                    <h2 className="text-3xl font-bold text-text-primary">
                        <span className="text-accent">{"// "}</span>Contacto
                    </h2>
                    <div className="flex-1 h-px bg-border" />
                </motion.div>

                <motion.p
                {...fadeUpOnView(0.1)}
                className="text-text-secondary text-lg leading-relaxed max-w-xl"
                >
                    Estoy buscando mi primer rol como desarrollador. Si tenés una
                    oportunidad o simplemente querés charlar, escribime por cualquiera
                    de estos medios.
                </motion.p>

                <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    {...fadeUpOnView(index * 0.1)}
                    className="flex items-center gap-5 p-5 bg-[#111111] border border-border rounded-xl hover:border-accent group transition-colors duration-300 w-full md:w-fit md:min-w-96"
                    >
                    <link.icono
                        size={20}
                        className="text-accent shrink-0"
                    />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-text-secondary text-xs uppercase tracking-widest">
                        {link.label}
                        </span>
                        <span className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-300">
                        {link.valor}
                        </span>
                    </div>
                    </motion.a>
                ))}
                </div>

            </div>
        </section>
    );
}