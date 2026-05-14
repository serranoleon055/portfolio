import { type IconType } from "react-icons";
import {
    SiHtml5, SiCss, SiJavascript, SiTypescript,
    SiReact, SiTailwindcss, SiVite,
} from "react-icons/si";
import {
    SiSpring, SiMysql, SiPostman,
    SiJunit5, SiGit, SiGithub,
    SiVercel, SiIntellijidea,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export type Skill = {
    nombre: string;
    icono: IconType;
};

export type CategoriaHabilidad = {
    categoria: string;
    skills: Skill[];
};

export const habilidades: CategoriaHabilidad[] = [
    {
    categoria: "Frontend",
    skills: [
        { nombre: "HTML",       icono: SiHtml5 },
        { nombre: "CSS",        icono: SiCss },
        { nombre: "JavaScript",  icono: SiJavascript },
        { nombre: "TypeScript",  icono: SiTypescript },
        { nombre: "React",       icono: SiReact },
        { nombre: "Tailwind",    icono: SiTailwindcss },
        { nombre: "Vite",        icono: SiVite },
    ],
    },
    {
    categoria: "Backend",
    skills: [
        { nombre: "Java",        icono: FaJava },
        { nombre: "Spring Boot", icono: SiSpring },
        { nombre: "MySQL",       icono: SiMysql },
        { nombre: "JUnit",     icono: SiJunit5 },
        { nombre: "Postman",     icono: SiPostman },
    ],
    },
    {
    categoria: "Herramientas",
    skills: [
        { nombre: "Git",         icono: SiGit },
        { nombre: "GitHub",      icono: SiGithub },
        { nombre: "Vercel",      icono: SiVercel },
        { nombre: "IntelliJ",    icono: SiIntellijidea },
    ],
    },
];