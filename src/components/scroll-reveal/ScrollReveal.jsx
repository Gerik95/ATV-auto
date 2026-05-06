import React from "react";
import { useLocation } from "react-router-dom";
import "./ScrollReveal.css";

const REVEAL_SELECTORS = [
    ".servicesGrid > *",
    ".advantagesGrid > *",
    ".processGrid > *",
    ".reviewsGrid > *",
    ".contactGrid > *",
    ".about-best-layout > *",
    ".about-best-text > *",
    ".about-company-grid > *",
    ".about-hero-stats > *",
    ".tirefit-hero-stats > *",
    ".tirefit-services-grid > *",
    ".tirefit-service-list > *",
    ".tirefit-benefits-grid > *",
    ".tirefit-visit-grid > *",
    ".contact_grid > *",
    ".contact_grid_tires > *",
    ".contacts_grid > *",
    ".catalog-cards > *",
    ".shop_company",
    ".shop_best",
    ".cooperation_info",
    ".requisites",
    ".cooperation-offer-grid > *",
    ".cooperation-categories-grid > *",
    ".cooperation-benefits-grid > *",
    ".cooperation-capability-grid > *",
    ".cooperation-capability-stats > *",
    ".cooperation-final-grid > *",
    ".motoboard-block",
    ".section-item",
    ".block_wrap",
    "main article",
].join(", ");

const HERO_EXCLUDE_SELECTOR = [
    ".hero",
    ".about-hero",
    ".first-screen-wrapper",
    ".react-parallax",
].join(", ");

const STATIC_EXCLUDE_SELECTOR = [
    ".footer",
    "footer",
].join(", ");

const MIN_BLOCK_AREA = 8000;

const ScrollReveal = () => {
    const location = useLocation();
    const observerReference = React.useRef(null);
    const mutationObserverReference = React.useRef(null);

    React.useEffect(() => {
        if (typeof window === "undefined" || typeof document === "undefined") {
            return undefined;
        }

        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (mediaQuery.matches) {
            return undefined;
        }

        const revealElements = () => {
            const candidates = Array.from(document.querySelectorAll(REVEAL_SELECTORS));
            const uniqueCandidates = Array.from(new Set(candidates));

            uniqueCandidates.forEach((element, index) => {
                if (!(element instanceof HTMLElement)) {
                    return;
                }

                if (element.dataset.revealBound === "true") {
                    return;
                }

                if (element.closest(HERO_EXCLUDE_SELECTOR) || element.closest(STATIC_EXCLUDE_SELECTOR)) {
                    return;
                }

                const { width, height } = element.getBoundingClientRect();

                if (width * height < MIN_BLOCK_AREA) {
                    return;
                }

                element.dataset.revealBound = "true";
                element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
                element.classList.add("scroll-reveal-block");
                observerReference.current?.observe(element);
            });
        };

        observerReference.current?.disconnect();
        mutationObserverReference.current?.disconnect();

        observerReference.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observerReference.current?.unobserve(entry.target);
                });
            },
            {
                root: null,
                rootMargin: "0px 0px 22% 0px",
                threshold: 0.08,
            }
        );

        const runRevealBinding = () => {
            window.requestAnimationFrame(() => {
                revealElements();
            });
        };

        runRevealBinding();

        mutationObserverReference.current = new MutationObserver(() => {
            runRevealBinding();
        });

        mutationObserverReference.current.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observerReference.current?.disconnect();
            mutationObserverReference.current?.disconnect();
        };
    }, [location.pathname]);

    return null;
};

export default ScrollReveal;
