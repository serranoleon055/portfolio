import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";

const links = [
    { label: "Inicio",      href: "#inicio" },
    { label: "Sobre mí",    href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos",   href: "#proyectos" },
    { label: "Contacto",    href: "#contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Detecta si el usuario scrolleó más de 50px
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                ? "bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-border"
                : "bg-transparent"
            }`}
        >
            <nav className="w-full mx-auto px-6 h-16 flex items-center justify-around">

                <a href="#inicio" className="text-accent font-bold text-lg hover:text-[#4f46e5] transition-colors duration-200">
                León Serrano
                </a>

                <ul className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <li key={link.label}>
                    <a href={link.href} className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-200">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
                
                <a 
                href="https://github.com/serranoleon055"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                    <FiGithub size={20} />
                </a>

            </nav>
        </header>
    );
}