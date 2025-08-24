"use client"

import React from 'react'

import FirstImg from '../../../../../../public/project-img/ulearn.png'
import SecondImg from '../../../../../../public/project-img/ulearn-pattern.png'
import ThirdImg from '../../../../../../public/project-img/ulearn-phone.png'


const Page = () => {
    return (
        <div className='bg-charcoal'>
            <div className='grid grid-cols-2 min-h-screen'>
                <div className='cols-span-1'>
                    <div className='sticky top-10 m-10'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='fade-in text-white text-8xl text-start font-semibold'>Ulearn</h1>
                            <p className='fade-in text-white w-full'>
                                uLearn is a simple yet impactful web-based learning platform developed in just 4 hours during the 6-hour "Innoverse" competition held by Infinite Learning. Created by a small team under intense time constraints, uLearn aims to make online education more accessible and intuitive for users. The platform provides a clean interface, essential learning features, and a smooth user experience — all built to demonstrate how much can be achieved through collaboration, creativity, and focus, even within a limited timeframe.
                            </p>
                            <a href="https://www.figma.com/design/2mXqF7TT69ECnvNtRC6NYC/Ulearn?node-id=5-2735&t=zaR5bLDibHiHQcn3-1" target='_blank' className='fade-in text-white underline underline-offset-8 my-10'>Preview</a>

                            <div className='w-full flex flex-col justify-center my-10'>
                                <h2 className='text-white my-5'>Credit</h2>
                                {[
                                    ["M. Abdull Aziz", "FrontEnd & UI/UX Designer"],
                                    ["Michael Lee", "FrontEnd & UI/UX Designer"],
                                    ["Shafiq", "FrontEnd & UI/UX Designer"],
                                    ["Farhan Ramadhan", "UI/UX Designer"],
                                    ["M. Adib Fakhri S.", "UI/UX Designer"],
                                ].map(([name, role], i) => (
                                    <div key={i} className='w-full flex justify-between text-white'>
                                        <p>{name}</p>
                                        <p>{role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cols-span-1 flex justify-center my-10 px-10'>
                    <div className='bg-white w-full flex flex-col gap-2 items-center p-10'>
                        <img
                            src={FirstImg.src} alt="Ulearn Screenshot 1"
                            className="size-full object-cover object-center"
                        />
                        <img
                            src={SecondImg.src} alt="Ulearn Screenshot 2"
                            className="size-full object-cover object-center"
                        />
                        <img
                            src={ThirdImg.src} alt="Ulearn Screenshot 3"
                            className="size-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>

            <div className='w-full h-40 bg-white'>
                <div className='size-full flex justify-between items-center px-10'>
                    <a href="/project-section/project-list/uiux/sureco" className='text-charcoal flex items-center hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-6' fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        Prev
                    </a>
                    <a href="/" className='text-charcoal flex items-center hover:underline'>
                        Back to home
                    </a>
                    <a href="/project-section/project-list/uiux/sureco" className='text-charcoal flex items-center hover:underline'>
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-6' fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Page