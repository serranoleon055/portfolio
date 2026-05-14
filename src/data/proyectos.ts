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
        nombre: "Sistema de Turnos y Reservas",
        descripcion:
        "Aplicación fullstack para gestión de turnos con autenticación JWT, roles de usuario, arquitectura en capas y tests unitarios. El rol admin puede registrar clientes, profesionales y servicios, y gestionar reservas con control de estados. Usuario puede reservar turnos. Deploy en producción.",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JUnit", "MySQL", "React", "TypeScript", "Tailwind"],
        github: "https://github.com/serranoleon055/sistema-turnos",
        githubFrontend: "https://github.com/serranoleon055/reservas-frontend",
        demo: "https://reservas-frontend-two.vercel.app/",
        destacado: true,
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