'use client'
import React, { useEffect, useRef } from 'react';

const NeonCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);

    useEffect(() => {
        // Check if we're on a touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        // Mouse move handler
        const handleMouseMove = (e : any) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            positionRef.current = { x: mouseX, y: mouseY };
        };

        // Smooth follow animation
        const animate = () => {
            // Smooth lerp (linear interpolation)
            const speed = 0.15;
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            if (cursor) {
                cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
            if (cursorDot) {
                cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        // Handle hover effects on interactive elements
        const handleMouseEnter = () => {
            isHoveringRef.current = true;
            if (cursor) {
                cursor.style.width = '60px';
                cursor.style.height = '60px';
                cursor.style.border = '2px solid rgba(34, 211, 238, 0.8)';
                cursor.style.background = 'rgba(34, 211, 238, 0.1)';
            }
            if (cursorDot) {
                cursorDot.style.width = '6px';
                cursorDot.style.height = '6px';
            }
        };

        const handleMouseLeave = () => {
            isHoveringRef.current = false;
            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.border = '2px solid rgba(34, 211, 238, 0.5)';
                cursor.style.background = 'rgba(34, 211, 238, 0.05)';
            }
            if (cursorDot) {
                cursorDot.style.width = '4px';
                cursorDot.style.height = '4px';
            }
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);

        // Select all interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .cursor-hover'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Start animation
        const animationId = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className="neon-cursor"
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(34, 211, 238, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-20px',
                    top: '-20px',
                    background: 'rgba(34, 211, 238, 0.05)',
                    backdropFilter: 'blur(2px)',
                    transition: 'width 0.3s ease, height 0.3s ease, border 0.3s ease, background 0.3s ease',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)'
                }}
            />

            {/* Inner dot */}
            <div
                ref={cursorDotRef}
                className="neon-cursor-dot"
                style={{
                    position: 'fixed',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#22d3ee',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    left: '-2px',
                    top: '-2px',
                    transition: 'width 0.3s ease, height 0.3s ease',
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.4)'
                }}
            />
        </>
    );
};


export default NeonCursor;
