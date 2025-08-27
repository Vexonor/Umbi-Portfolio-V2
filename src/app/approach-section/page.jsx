"use client"

import { Compares } from "../components/compare"

const ApproachSection = () => {
  return (
    <div className="size-full">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center my-10">“Solve ur Problem like ur mom search an item”</h2>

      <div className="w-full h-[25rem] md:h-[35rem] lg:h-[50rem] xl:h-[60rem] bg-snowbank flex flex-col justify-start items-center">
        <h2 className="text-3xl lg:text-5xl font-bold my-10">Our Approach</h2>

        <div className="flex relative">
          <Compares />
        </div>
      </div>
    </div>
  )
}

export default ApproachSection