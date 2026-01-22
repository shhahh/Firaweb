import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Cursor = () => {
    const [cursorText, setCursorText] = useState("");
    const [variant, setVariant] = useState("default");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const onMouseMove = useCallback((e) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);

        // State detection based on data attributes
        const target = e.target;
        const cursorData = target.closest('[data-cursor]');

        if (cursorData) {
            const type = cursorData.getAttribute('data-cursor');
            setVariant(type);
            if (type === 'project') setCursorText("View Project");
            else setCursorText("");
        } else {
            setVariant("default");
            setCursorText("");
        }
    }, [mouseX, mouseY]);

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, [onMouseMove]);

    const variants = {
        default: {
            height: 20,
            width: 20,
            backgroundColor: "transparent",
            border: "2px solid var(--color-primary)",
        },
        project: {
            height: 120,
            width: 120,
            backgroundColor: "var(--color-primary)",
            mixBlendMode: "difference",
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-center overflow-hidden"
                variants={variants}
                animate={variant}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[10px] font-bold uppercase tracking-tighter text-black"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>

            {/* Ambient Glow follows with even more lag */}
            <motion.div
                className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-[-1]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default Cursor;
