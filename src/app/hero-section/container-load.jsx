import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const ContainerLoading = ({ onFinish }) => {
    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 })

        tl.to(leftRef.current, {
            x: "-100%",
            duration: 2,
            ease: "power3.inOut"
        })
            .to(rightRef.current, {
                x: "100%",
                duration: 2,
                ease: "power3.inOut",
                onComplete: () => {
                    if (onFinish) onFinish()
                }
            }, "<")
    }, [onFinish])

    return (
        <div className='w-dvw flex z-50 pointer-events-none absolute overflow-hidden'>
            <div
                ref={leftRef}
                className='w-1/2 h-dvh bg-black' />
            <div
                ref={rightRef}
                className='w-1/2 h-dvh bg-black' />
        </div>
    )
}

export default ContainerLoading