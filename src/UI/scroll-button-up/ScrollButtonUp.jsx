import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import buttonUp from "../../assets/images/upload.svg";
import { isMobile } from 'react-device-detect';
import "./ScrollButtonUp.css";

const ScrollButtonUp = () => {
    const [classes, setClasses] = useState(false);
    const [isLightSurface, setIsLightSurface] = useState(false);
    const scrollButtonRef = useRef(null);

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setClasses(position > 250);
    };

    useEffect(() => {
        handleVisibleButton();
        window.addEventListener("scroll", handleVisibleButton);
        return () => {
            window.removeEventListener("scroll", handleVisibleButton);
        };
    }, []);

    useEffect(() => {
        if (!classes) {
            setIsLightSurface(false);
            return undefined;
        }

        const parseRgba = (value) => {
            const match = value && value.match(/rgba?\(([^)]+)\)/i);
            if (!match) return null;

            const parts = match[1].split(",").map((part) => Number(part.trim()));
            if (parts.length < 3) return null;

            const [r, g, b, a] = parts;
            return {
                r,
                g,
                b,
                a: Number.isFinite(a) ? a : 1,
            };
        };

        const getSolidBackground = (startNode) => {
            let node = startNode;
            while (node && node !== document.documentElement) {
                const styles = window.getComputedStyle(node);
                const parsed = parseRgba(styles.backgroundColor);
                if (parsed && parsed.a > 0) {
                    return parsed;
                }
                node = node.parentElement;
            }

            const bodyParsed = parseRgba(window.getComputedStyle(document.body).backgroundColor);
            if (bodyParsed && bodyParsed.a > 0) {
                return bodyParsed;
            }

            const rootParsed = parseRgba(window.getComputedStyle(document.documentElement).backgroundColor);
            if (rootParsed && rootParsed.a > 0) {
                return rootParsed;
            }

            return null;
        };

        let retryTimerId = null;
        const updateSurfaceTone = (attempt = 0) => {
            const buttonNode = scrollButtonRef.current;
            if (!buttonNode) return;

            const rect = buttonNode.getBoundingClientRect();
            const sampleX = rect.left + rect.width / 2;
            const sampleY = rect.top + rect.height / 2;
            const clampedX = Math.max(1, Math.min(window.innerWidth - 1, sampleX));
            const clampedY = Math.max(1, Math.min(window.innerHeight - 1, sampleY));

            const previousPointerEvents = buttonNode.style.pointerEvents;
            buttonNode.style.pointerEvents = "none";
            const sampleNode = document.elementFromPoint(clampedX, clampedY);
            buttonNode.style.pointerEvents = previousPointerEvents;

            if (!sampleNode) {
                if (attempt < 3) {
                    if (retryTimerId) window.clearTimeout(retryTimerId);
                    retryTimerId = window.setTimeout(() => updateSurfaceTone(attempt + 1), 90);
                }
                return;
            }

            const surfaceColor = getSolidBackground(sampleNode);
            if (!surfaceColor) {
                if (attempt < 3) {
                    if (retryTimerId) window.clearTimeout(retryTimerId);
                    retryTimerId = window.setTimeout(() => updateSurfaceTone(attempt + 1), 90);
                }
                return;
            }

            const { r, g, b } = surfaceColor;
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsLightSurface(luminance > 0.62);
        };

        let frameId = null;
        let settleTimerId = null;
        let finalSettleTimerId = null;
        const handleViewportChange = () => {
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(updateSurfaceTone);
        };

        const handleVisibilityChange = () => {
            if (settleTimerId) window.clearTimeout(settleTimerId);
            if (finalSettleTimerId) window.clearTimeout(finalSettleTimerId);

            handleViewportChange();
            settleTimerId = window.setTimeout(handleViewportChange, 220);
            finalSettleTimerId = window.setTimeout(handleViewportChange, 460);
        };

        const bodyClassObserver =
            typeof MutationObserver !== "undefined"
                ? new MutationObserver(() => {
                    handleVisibilityChange();
                })
                : null;

        const handleButtonTransitionEnd = (event) => {
            if (event.propertyName === "right" || event.propertyName === "transform") {
                handleViewportChange();
            }
        };

        const buttonNode = scrollButtonRef.current;

        handleViewportChange();
        window.addEventListener("scroll", handleViewportChange, { passive: true });
        window.addEventListener("resize", handleViewportChange);
        if (buttonNode) {
            buttonNode.addEventListener("transitionend", handleButtonTransitionEnd);
        }
        if (bodyClassObserver && document.body) {
            bodyClassObserver.observe(document.body, {
                attributes: true,
                attributeFilter: ["class"],
            });
        }

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            if (settleTimerId) window.clearTimeout(settleTimerId);
            if (finalSettleTimerId) window.clearTimeout(finalSettleTimerId);
            if (retryTimerId) window.clearTimeout(retryTimerId);
            if (bodyClassObserver) bodyClassObserver.disconnect();
            if (buttonNode) {
                buttonNode.removeEventListener("transitionend", handleButtonTransitionEnd);
            }
            window.removeEventListener("scroll", handleViewportChange);
            window.removeEventListener("resize", handleViewportChange);
        };
    }, [classes]);

    const onTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onTopButton();
        }
    };

    return (
        <div
            ref={scrollButtonRef}
            onClick={onTopButton}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Прокрутить страницу вверх"
            className={cn("button_top", {
                show: classes,
                hide: !classes,
                mobile: isMobile,
                "light-surface": isLightSurface && classes,
            })}
        >
            <img src={buttonUp} alt="Button Up" loading="lazy" />
        </div>
    );
};

export default ScrollButtonUp;