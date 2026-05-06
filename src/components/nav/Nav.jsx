import React, { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { routes } from '../../routes'
import './Nav.css'
import cn from 'classnames'

const NavMenu = () => {
    const [navActive, setNavActive] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [isLightSurface, setIsLightSurface] = useState(false);
    const [isCompactViewport, setIsCompactViewport] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const navId = useId();
    const location = useLocation();
    const headerRef = React.useRef(null);
    const floatingCallRef = React.useRef(null);

    useEffect(() => {
        setNavActive(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!navActive) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setNavActive(false);
            }
        };

        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            window.scrollTo({ top: scrollY, behavior: 'instant' });
            window.removeEventListener('keydown', handleEscape);
        };
    }, [navActive]);

    useEffect(() => {
        const headerNode = headerRef.current;
        if (!headerNode || typeof IntersectionObserver === 'undefined') {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(headerNode);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateViewportState = () => {
            const isNarrow = window.innerWidth <= 1024;
            const isTabletLandscape =
                window.innerWidth > 1024 &&
                window.innerWidth <= 1366 &&
                window.innerHeight <= 1024;
            setIsCompactViewport(isNarrow || isTabletLandscape);
        };

        const updateScrollState = () => {
            setIsScrolledDown(window.scrollY > 140);
        };

        updateViewportState();
        updateScrollState();

        window.addEventListener('resize', updateViewportState);
        window.addEventListener('scroll', updateScrollState, { passive: true });

        return () => {
            window.removeEventListener('resize', updateViewportState);
            window.removeEventListener('scroll', updateScrollState);
        };
    }, []);

    const shouldShowFloatingCall = !navActive && (isCompactViewport ? isScrolledDown : !isHeaderVisible);

    useEffect(() => {
        if (!shouldShowFloatingCall) {
            setIsLightSurface(false);
            return undefined;
        }

        const parseRgba = (value) => {
            const match = value && value.match(/rgba?\(([^)]+)\)/i);
            if (!match) return null;
            const parts = match[1].split(',').map((part) => Number(part.trim()));
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
            return { r: 17, g: 17, b: 17, a: 1 };
        };

        const updateSurfaceTone = () => {
            const callButton = floatingCallRef.current;
            if (!callButton) return;

            const rect = callButton.getBoundingClientRect();
            const sampleX = rect.left + rect.width / 2;
            const sampleY = rect.top + rect.height / 2;

            const previousPointerEvents = callButton.style.pointerEvents;
            callButton.style.pointerEvents = 'none';
            const sampleNode = document.elementFromPoint(sampleX, sampleY);
            callButton.style.pointerEvents = previousPointerEvents;

            const { r, g, b } = getSolidBackground(sampleNode);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setIsLightSurface(luminance > 0.62);
        };

        let frameId = null;
        const handleViewportChange = () => {
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(updateSurfaceTone);
        };

        handleViewportChange();
        window.addEventListener('scroll', handleViewportChange, { passive: true });
        window.addEventListener('resize', handleViewportChange);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            window.removeEventListener('scroll', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);
        };
    }, [shouldShowFloatingCall]);

    const handleToggleNav = () => setNavActive((prevState) => !prevState);
    const handleCloseNav = () => setNavActive(false);

    const renderMenu = () => {
        return routes.map((route) => {
            if (route.img) {
                return (
                    <div className="logo" key={route.id} aria-hidden="true">
                        <img src={route.img} alt="ATV Auto"  loading="lazy" />
                    </div>
                );
            }

            return (
                <NavLink
                    className={({ isActive }) => cn('link', route.class, { active: isActive })}
                    to={route.route}
                    onClick={handleCloseNav}
                    key={route.id}
                >
                    {route.title}
                </NavLink>
            );
        });
    };

    return (
        <header className="header" ref={headerRef}>
            <div className="wrapper">
                <div className="headerGrid">
                    <button
                        type="button"
                        className={cn('menu-button', { active: navActive })}
                        onClick={handleToggleNav}
                        aria-expanded={navActive}
                        aria-controls={navId}
                        aria-label={navActive ? 'Закрыть меню' : 'Открыть меню'}
                    >
                        <span className="menu-button__box" aria-hidden="true">
                            <span className="menu-button__line line-top" />
                            <span className="menu-button__line line-center" />
                            <span className="menu-button__line line-bottom" />
                        </span>
                    </button>

                    <button
                        type="button"
                        className={cn('nav-overlay', { active: navActive })}
                        onClick={handleCloseNav}
                        aria-label="Закрыть меню"
                        tabIndex={navActive ? 0 : -1}
                    />

                    <div
                        id={navId}
                        className={cn('nav-shell', { active: navActive })}
                    >
                        <div className="nav-menu">
                            {renderMenu()}
                            <a
                                className="link header-call-btn"
                                href="tel:+78123307115"
                                onClick={handleCloseNav}
                                aria-label="Позвонить в ATV Auto по номеру +7 (812) 330-71-15"
                            >
                                +7 (812) 330-71-15
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a
                ref={floatingCallRef}
                className={cn('header-floating-call-btn', {
                    visible: shouldShowFloatingCall,
                    'light-surface': isLightSurface && shouldShowFloatingCall,
                })}
                href="tel:+78123307115"
                aria-label="Позвонить в ATV Auto по номеру +7 (812) 330-71-15"
            >
                <span className="floating-call-icon" aria-hidden="true">☎︎</span>
                <span className="floating-call-text">+7 (812) 330-71-15</span>
            </a>
        </header>
    )
}
export default NavMenu;