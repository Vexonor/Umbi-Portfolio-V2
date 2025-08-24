"use client"

const WhyUsSection = () => {
  return (
    <div className="size-full">

      <div className="h-40 w-full flex items-center justify-center">
        <h1 className="font-bold text-5xl lg:text-7xl text-center">Why Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 h-max md:h-[600px] px-9">
        <div className="col-span-1 md:row-span-2 bg-charcoal flex flex-col gap-4 justify-between text-white text-2xl rounded-xl p-8">
          {/* Number */}
          <div className="bg-white size-10 md:size-12 rounded-full flex justify-center items-center">
            <span className="text-xl md:text-2xl font-medium text-charcoal">01</span>
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-medium">Creative</h2>
            <p className="text-sm md:text-base font-medium">We craft innovative and tailored IT solutions that bring your ideas to life, combining technology and creativity for maximum impact.</p>
          </div>
        </div>
        <div className="col-span-1 md:row-span-4 md:col-start-2 bg-charcoal flex flex-col gap-4 justify-between p-8 text-white text-2xl rounded-xl">
          {/* Number */}
          <div className="bg-white size-10 md:size-12 rounded-full flex justify-center items-center">
            <span className="text-xl md:text-2xl font-medium text-charcoal">03</span>
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-medium">Update</h2>
            <p className="text-sm md:text-base font-medium">We keep your systems and solutions fresh, secure, and aligned with the latest technology trends to ensure long-term success.</p>
          </div>
        </div>
        <div className="col-span-1 row-start-3 md:row-span-2 bg-charcoal flex flex-col gap-4 justify-between text-white text-2xl rounded-xl p-8">
          {/* Number */}
          <div className="bg-white size-10 md:size-12 rounded-full flex justify-center items-center">
            <span className="text-xl md:text-2xl font-medium text-charcoal">02</span>
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-medium">Effective</h2>
            <p className="text-sm md:text-base font-medium">Our solutions are designed for real results—efficient, scalable, and built to solve your challenges the right way.</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default WhyUsSection