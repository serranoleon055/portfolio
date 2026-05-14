import { FiGithub, FiExternalLink } from "react-icons/fi";
import { type Proyecto } from "../data/proyectos";

type Props = {
    proyecto: Proyecto;
};

export default function ProyectoCard({ proyecto }: Props) {
    return (
        <div className="flex flex-col gap-5 bg-[#111111] border border-border rounded-2xl p-6 hover:border-accent transition-colors duration-300">

            {proyecto.destacado && (
                <span className="self-start text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                Proyecto principal
                </span>
            )}

            <h3 className="text-text-primary font-semibold text-xl">
                {proyecto.nombre}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {proyecto.descripcion}
            </p>

            <div className="flex flex-wrap gap-2">
                {proyecto.stack.map((tech) => (
                <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-[#0a0a0a] border border-border text-text-secondary"
                >
                    {tech}
                </span>
                ))}
            </div>

            <div className="flex gap-4 pt-1">

                <a 
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors duration-200">
                    <FiGithub size={16} />
                    <span>{proyecto.githubFrontend ? "Backend" : "GitHub"}</span>
                </a>

                {proyecto.githubFrontend && (                    
                    <a 
                        href={proyecto.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm transition-colors duration-200">
                        <FiGithub size={16} />
                        <span>Frontend</span>
                    </a>
                    )}

                    {proyecto.demo && (
                        
                    <a  
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-[#4f46e5] text-sm transition-colors duration-200" >
                        <FiExternalLink size={16} />
                        <span>Demo</span>
                    </a>
                )}
            </div>

        </div>
    );
}