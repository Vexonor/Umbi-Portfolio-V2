import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="size-full py-10">
                <div className='w-screen h-screen border-y-4 flex flex-col justify-center border-black p-20'>
                    <div className='w-full h-5/6'>
                        <h2 className='font-semibold text-2xl'>If u need us just contact us</h2>
                        <div className='flex flex-wrap my-5 gap-4'>
                            <a href="#" target="_blank" className='border-2 border-black rounded-lg p-2 group'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-8 group-hover:scale-125 transition-all duration-300' fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                            </a>
                            <a href="#" target="_blank" className='border-2 border-black rounded-lg p-2 group'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-8 group-hover:scale-125 transition-all duration-300' fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                            </a>
                            <a href="#" target="_blank" className='border-2 border-black rounded-lg p-2 group'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-8 group-hover:scale-125 transition-all duration-300' fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-2xl'>See u on ur project</h2>
                        <h2 className='font-semibold text-2xl'>Umbi_dev</h2>
                    </div>
                </div>
            </footer>
            <div className='w-full h-12 flex justify-center items-center'>
                <p>From umbi to Everyone (who have money)</p>
            </div>
        </>
    )
}

export default Footer