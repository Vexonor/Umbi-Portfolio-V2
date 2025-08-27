"use client"

import { useState } from 'react'
import BlurText from './blur-text'
import ContainerLoading from './container-load'
import SplitText from './split-text'

const HeroSection = () => {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <>
      {showLoading && <ContainerLoading onFinish={() => setShowLoading(false)} />}
      <div className='w-dvw h-dvh relative flex justify-center items-center'>
        <div className="size-full flex flex-col justify-center items-center gap-2">
          <BlurText
            text="UmbiDev"
            delay={1000}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-7xl lg:text-9xl font-bold"
          />
          <SplitText
            text="The only Dev u need"
            className="text-xl lg:text-4xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* <DotEffect duration={800} />
        <DotEffect duration={1600} /> */}

      </div>

    </>
  )
}

export default HeroSection