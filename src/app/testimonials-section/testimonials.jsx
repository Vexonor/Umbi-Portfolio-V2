
const TestimonialsSection = () => {
  return (
    <div className='w-screen h-screen bg-charcoal flex flex-col justify-center items-center gap-4 p-10'>
      <h1 className='text-6xl font-semibold text-white'>Our Client Review</h1>
      <p className='text-white text-xl'>so u don't need to worry</p>

      <div className='w-3/4 h-1/2 bg-white relative my-10'>
        <div className='absolute bottom-10 w-full flex flex-wrap justify-center items-center gap-4'>
          <div className='flex-1 flex justify-center items-center gap-4'>
            <div className="size-10 bg-gray-400 rounded-full"></div>
            <h4 className='font-xl font-semibold'>Su-re.co</h4>
          </div>

          <div className='flex-3'>
            <div className='w-10/12 h-1 bg-black' />
          </div>
        </div>
      </div>

      {/* Top-Left Circle */}
      <div className="absolute -top-3 left-10">
        <div className="flex flex-wrap w-16 gap-1 rotate-90 lg:rotate-0">
          {[...Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="size-2 lg:size-4 bg-white rounded-full"></div>
          ))]}
        </div>
      </div>

      {/* Bottom-Right Circle */}
      <div className="absolute bottom-20 -right-8 lg:right-2">
        <div className="flex flex-wrap w-16 gap-1 lg:rotate-90">
          {[...Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="size-2 lg:size-4 bg-white rounded-full"></div>
          ))]}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection