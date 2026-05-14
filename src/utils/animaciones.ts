import { type Transition } from "framer-motion";

// Para elementos que animan al cargar la página (Hero)
export const fadeUp = (delay: number): {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: Transition;
    } => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
});

// Para elementos que animan al hacer scroll
export const fadeUpOnView = (delay: number = 0): {
    initial: { opacity: number; y: number };
    whileInView: { opacity: 1, y: 0 };
    viewport: { once: boolean };
    transition: Transition;
    } => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" },
});