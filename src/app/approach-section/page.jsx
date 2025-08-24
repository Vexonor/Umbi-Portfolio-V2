"use client"

import { ArrowRightIcon } from "@phosphor-icons/react"

const ApproachSection = () => {
  return (
    <div className="size-full">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center my-10">“Solve ur Problem like ur mom search an item”</h2>

      <div className="w-full h-[50rem] bg-snowbank flex flex-col justify-start items-center">
        <h2 className="text-3xl lg:text-5xl font-bold my-10">Our Approach</h2>

        <div className="flex relative">
          <div className="size-[12rem] md:size-[20rem] lg:size-[28rem] xl:size-[38rem] bg-slate-400 rounded-l-3xl border-2 border-r-0 border-l-charcoal" />
          <div className="size-[12rem] md:size-[20rem] lg:size-[28rem] xl:size-[38rem] bg-slate-400 rounded-r-3xl border-2 border-r-charcoal" />
          <div className="absolute right-1/2 bottom-1/2 translate-1/2 size-16 xl:size-20 rounded-full border-2 border-charcoal bg-slate-400 flex justify-center items-center">
            <ArrowRightIcon className="text-charcoal size-6 xl:size-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproachSection