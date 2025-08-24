import React from 'react'
import Image from 'next/image'
import teamImg from '../../../public/image/team-img.png'

const AboutSection = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <Image
                src={teamImg} alt={'Umbi Team'}
                height="1000"
                width="1000"
                className="size-60 md:size-80 object-cover object-center"
            />
            <div className="relative w-3/4">
                <div className="w-max absolute -top-28 left-2 bg-mine-shaft text-white text-center px-5 py-3 z-50">
                    <h4 className="font-semibold">About us</h4>
                </div>
                <div className="absolute -top-20 h-32 bg-white border border-black flex justify-center items-center  p-4">
                    <p className="w-3/4 mx-auto text-center font-medium">
                        Umbi Dev is a growing tech community focused on web development, game development, UI/UX design, and mobile development. With a team of four skilled members, we deliver high-quality, impactful solutions.
                    </p>
                </div>
                <div className="bg-gray-300 border border-gray-500 w-full h-32 absolute -top-16 left-4 -z-30" />
            </div>
        </div>
    )
}

export default AboutSection