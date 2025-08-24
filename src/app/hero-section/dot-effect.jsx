import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"

const DotEffect = ({ duration }) => {
    const dotRef = useRef(null)

    const animateDot = () => {
        const el = dotRef.current;
        if (!el) return;

        const maxDotSize = 100;

        const safeX = Math.random() * (window.innerWidth - maxDotSize);
        const safeY = Math.random() * (window.innerHeight - maxDotSize);

        el.style.left = `${safeX}px`;
        el.style.top = `${safeY}px`;

        gsap.fromTo(
            el,
            {
                width: 20,
                height: 20,
                filter: "blur(60px)",
                opacity: 0.2,
            },
            {
                width: maxDotSize,
                height: maxDotSize,
                filter: "blur(100px)",
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                onComplete: () => {
                    setTimeout(animateDot, duration)
                }
            }
        );
    }

    useEffect(() => {
        const el = dotRef.current
        if (el) {
            el.style.position = "absolute"
            animateDot()
        }
    }, [])

    return (
        <div
            ref={dotRef}
            className='bg-black rounded-full -z-50'
            style={{
                width: 100,
                height: 100,
                pointerEvents: "none"
            }} />
    )
}

export default DotEffect