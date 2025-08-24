"use client"

import AbilityItem from './ability-item'

const AbilitySection = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-start gap-4'>
      <div className="px-6 py-2.5">
        <h1 className='flex-2 text-center text-3xl lg:text-6xl font-bold'>Our Ability</h1>
      </div>


      <AbilityItem />

    </div>
  )
}

export default AbilitySection