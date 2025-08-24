"use client"

import React from 'react'
import Image from 'next/image'
import FirstImg from '../../../../../../public/project-img/sureco.png'
import SecondImg from '../../../../../../public/project-img/ulearn-pattern.png'
import ThirdImg from '../../../../../../public/project-img/ulearn-phone.png'

const page = () => {
    return (
        <div className='bg-charcoal w-screen h-screen overflow-x-hidden'>
            <div className='grid grid-cols-2'>
                <div className='cols-span-1'>
                    <div className='sticky top-10 m-10'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-white text-8xl text-start font-semibold'>Su-re.co</h1>
                            <p className='text-white w-full'>Redesigning the UI/UX of a website using Figma to create a clean and visually appealing design. This involves applying UX principles by improving the website's layout structure to minimize excessive scrolling and enhance user convenience. Additionally, it includes analyzing UX issues such as inconsistent navigation, content, and typography to ensure a seamless and user-friendly experience.</p>
                            <a href="https://www.figma.com/design/j5T56OiAm48Z7JFgH6IU6X/su-re.co-Design?node-id=4-4&t=tXJkSJHTLtOxXgB4-1" target='_blank' className='text-white underline underline-offset-8 my-10'>Preview</a>

                            <div className='w-full flex flex-col justify-center my-10'>
                                <h2 className='text-white my-5'>Credit</h2>
                                <div className='w-full flex justify-between text-white'>
                                    <p>M. Abdull Aziz</p>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className='w-full flex justify-between text-white'>
                                    <p>Michael Lee</p>
                                    <p>UI/UX Designer</p>
                                </div>
                                <div className='w-full flex justify-between text-white'>
                                    <p>Shafiq</p>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cols-span-1 flex justify-center my-10 px-10'>
                    <div className='bg-white w-full flex flex-col gap-2 items-center p-10'>
                        <Image
                            src={FirstImg} alt={'Umbi Team'}
                            height="1000"
                            width="1000"
                            className="size-full object-cover object-center"
                        />
                        <Image
                            src={SecondImg} alt={'Umbi Team'}
                            height="1000"
                            width="1000"
                            className="size-full object-cover object-center"
                        />
                        <Image
                            src={ThirdImg} alt={'Umbi Team'}
                            height="1000"
                            width="1000"
                            className="size-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>

            <div className='w-full h-40 bg-white'>
                <div className='size-full flex justify-between items-center px-10'>
                    <a href="/project-section/project-list/uiux/ulearn" className='text-charcoal flex items-center hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-6' fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                        Prev
                    </a>
                    <a href="/" className='text-charcoal flex items-center hover:underline'>
                        Back to home
                    </a>
                    <a href="/project-section/project-list/uiux/ulearn" className='text-charcoal flex items-center hover:underline'>
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-6' fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                    </a>
                </div>
            </div>

        </div>
    )

}

export default page