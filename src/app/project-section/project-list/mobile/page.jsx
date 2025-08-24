"use client"

import React, { useState } from 'react'
import DecryptedText from '../../decrypted-text'
import DotEffect from '@/app/hero-section/dot-effect'
import ContainerLoading from '@/app/hero-section/container-load'

const Page = () => {
    const [showLoading, setShowLoading] = useState(true)

    return (
        <div className='overflow-hidden'>
            {showLoading && <ContainerLoading onFinish={() => setShowLoading(false)} />}
            <div className='w-screen h-screen relative flex justify-center items-center overflow-hidden text-6xl font-semibold'>
                <div className='size-full flex flex-col justify-center items-center gap-2'>
                    <DecryptedText
                        text="Coming Soon"
                        speed={100}
                        maxIterations={50}
                        characters="ABCD1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />
                </div>

                <DotEffect duration={800} />
                <DotEffect duration={1600} />
            </div>
        </div>
    )
}

export default Page