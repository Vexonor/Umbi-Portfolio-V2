"use client"

const AbilityItem = () => {
  return (
    <div className="w-full h-full p-1">
      <div className="size-full grid md:grid-cols-3">

        <div className="col-span-1 border border-black bg-black group cursor-pointer relative">
          <div className="flex justify-start items-center gap-4 p-4">
            <div className="size-6 lg:size-9 rounded-full border border-white flex justify-center items-center">
              <div className="size-2 lg:size-4 rounded-full bg-white group-hover:size-5 transition-all duration-150" />
            </div>
            <h2 className="font-semibold text-xl lg:text-4xl text-white transition-all duration-150">UI/UX Design</h2>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 border-r border-t border-b border-black group cursor-pointer relative">
          <div className="flex justify-start items-center gap-4 p-4">
            <div className="size-6 lg:size-9 rounded-full border border-black flex justify-center items-center">
              <div className="size-2 lg:size-4 rounded-full bg-black group-hover:size-5 transition-all duration-150" />
            </div>
            <h2 className="font-semibold text-xl lg:text-4xl  transition-all duration-150">Mobile App Development</h2>
          </div>

        </div>

        <div className="col-span-1 md:col-span-2 border-l border-r border-b border-black group cursor-pointer relative">
          <div className="flex justify-start items-center gap-4 p-4">
            <div className="size-6 lg:size-9 rounded-full border border-black flex justify-center items-center">
              <div className="size-2 lg:size-4 rounded-full bg-black group-hover:size-5 transition-all duration-150" />
            </div>
            <h2 className="font-semibold text-xl lg:text-4xl  transition-all duration-150">Website Development</h2>
          </div>

        </div>

        <div className="col-span-1 border-r border-b border-black bg-black group cursor-pointer relative">
          <div className="flex justify-start items-center gap-4 p-4">
            <div className="size-6 lg:size-9 rounded-full border border-white flex justify-center items-center">
              <div className="size-2 lg:size-4 rounded-full bg-white group-hover:size-5 transition-all duration-150" />
            </div>
            <h2 className="font-semibold text-xl lg:text-4xl text-white transition-all duration-150">Game Development</h2>
          </div>

        </div>

      </div>
    </div>
  )
}


export default AbilityItem