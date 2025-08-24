import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ContainerLoading = ({ onFinish }) => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 })

        tl.to(leftRef.current, {
            x: "-100%",
            duration: 1.2,
            ease: "power2.inOut"
        })
            .to(rightRef.current, {
                x: "100%",
                duration: 1.2,
                ease: "power2.inOut",
                onComplete: () => {
                    if (onFinish) onFinish()
                }
            }, "<")
    }, [onFinish])

    return (
        <div className='w-screen flex z-50 pointer-events-none absolute overflow-hidden'>
            <div
                ref={leftRef}
                className='w-1/2 h-screen bg-black' />
            <div
                ref={rightRef}
                className='w-1/2 h-screen bg-black' />
        </div>
    )
}

export default ContainerLoading