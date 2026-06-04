export type Proyecto = {
    nombre: string;
    descripcion: string;
    stack: string[];
    github: string;
    githubFrontend?: string;  
    demo?: string;           
    destacado: boolean;
};

export const proyectos: Proyecto[] = [
    {
        nombre: "RankPadel — Ranking y torneos de pádel",
        descripcion:
        "Plataforma full stack en producción para gestionar rankings, torneos y resultados de pádel, con sitio público y panel de administración. Incluye un motor de torneos con varios formatos, sorteo con cabezas de serie, fase de grupos y eliminatoria, y ranking configurable por temporada. Backend con seguridad JWT, rate-limiting y despliegue dockerizado en Railway; frontend en React 19 + TypeScript con code splitting, desplegado en Vercel.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Flyway", "Docker", "React", "TypeScript", "Tailwind", "Railway", "Vercel"],
        github: "https://github.com/serranoleon055/padel",
        githubFrontend: "https://github.com/serranoleon055/padel-front",
        demo: "https://padel-front-five.vercel.app",
        destacado: true,
    },
    {
        nombre: "Sistema de Turnos y Reservas",
        descripcion:
        "Aplicación full stack para gestión de turnos con autenticación JWT, roles de usuario, arquitectura en capas y tests unitarios. El rol admin registra clientes, profesionales y servicios, y gestiona reservas con control de estados; el cliente puede reservar turnos.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JUnit", "MySQL", "React", "TypeScript", "Tailwind"],
        github: "https://github.com/serranoleon055/sistema-turnos",
        githubFrontend: "https://github.com/serranoleon055/reservas-frontend",
        destacado: false,
    },
    {
        nombre: "API REST Supermercado",
        descripcion:
        "API REST completa con CRUD de productos, categorías y stock. Conexión a MySQL con JPA/Hibernate y documentación de endpoints en Postman.",
        stack: ["Java", "Spring Boot", "JPA", "MySQL", "Postman"],
        github: "https://github.com/serranoleon055/supermercado",
        destacado: false,
    },
];