import React from "react";
import "./CursorGlow.css";

const DARK_SECTION_SELECTOR = [
    ".hero",
    ".about-hero",
    ".sectionDark",
    ".about-section-dark",
    ".footer",
    "footer",
    ".statCard",
    ".reviewCard",
    ".advantageCard",
    ".about-feature",
    ".about-logo-card",
].join(", ");

const parseColor = (value) => {
    if (!value || value === "transparent") {
        return null;
    }

    const rgbMatch = value.match(/rgba?\(([^)]+)\)/i);

    if (!rgbMatch) {
        return null;
    }

    const [red, green, blue, alpha = "1"] = rgbMatch[1].split(",").map((item) => item.trim());

    return {
        red: Number(red),
        green: Number(green),
        blue: Number(blue),
        alpha: Number(alpha),
    };
};

const getLuminance = ({ red, green, blue }) => {
    return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
};

const isDarkBackground = (target) => {
    if (!(target instanceof Element)) {
        return false;
    }

    if (target.closest(DARK_SECTION_SELECTOR)) {
        return true;
    }

    let currentNode = target;

    while (currentNode && currentNode !== document.body) {
        const styles = window.getComputedStyle(currentNode);
        const color = parseColor(styles.backgroundColor);

        if (color && color.alpha > 0.08) {
            return getLuminance(color) < 0.45;
        }

        currentNode = currentNode.parentElement;
    }

    return false;
};

const CursorGlow = () => {
    const [cursorState, setCursorState] = React.useState({
        x: 0,
        y: 0,
        visible: false,
        active: false,
    });

    React.useEffect(() => {
        if (typeof window === "undefined") {
            return undefined;
        }

        const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

        if (!mediaQuery.matches) {
            return undefined;
        }

        const handleMouseMove = (event) => {
            setCursorState({
                x: event.clientX,
                y: event.clientY,
                visible: true,
                active: isDarkBackground(event.target),
            });
        };

        const handleMouseLeave = () => {
            setCursorState((previousState) => ({
                ...previousState,
                visible: false,
                active: false,
            }));
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className={`cursor-glow ${cursorState.visible ? "is-visible" : ""} ${cursorState.active ? "is-active" : ""}`}
            style={{
                transform: `translate3d(${cursorState.x}px, ${cursorState.y}px, 0) translate(-50%, -50%)`,
            }}
        />
    );
};

export default CursorGlow;
