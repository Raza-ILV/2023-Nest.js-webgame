import React from 'react'
import { Header } from '../parts/Header'

export const Home = () => {
  return (
  <>    
    <div className="w-full h-screen p-3 bg-slate-400">
      <Header />

      <div className='h-64 w-full flex shadow-lg mt-5 cursor-help rounded-md bg-orange-500 hover:scale-95 transition-transform'>
        <div className='flex flex-col items-center'>
          <div className="h-12 w-64 text-white uppercase text-3xl flex items-center justify-center">Vikings</div>
          <div className="h-48 w-48 bg-berserker bg-cover"></div>
        </div>
        <div className='flex-grow text-xl text-white p-5 h-64'>
          Higher chance to survive in battle!
        </div>
      </div>

      <div className='h-64 w-full flex shadow-lg mt-5 cursor-help rounded-md bg-blue-500 hover:scale-95 transition-transform'>
        <div className='flex flex-col items-center'>
          <div className="h-12 w-64 text-white uppercase text-3xl flex items-center justify-center">knights</div>
          <div className="h-48 w-48 bg-knight bg-cover"></div>
        </div>
        <div className='flex-grow text-xl text-white p-5 h-64'>
          Better training is good! Reqruist are stronger and max level is higher.
        </div>
      </div>

      <div className='h-64 w-full flex shadow-lg mt-5 cursor-help rounded-md bg-rose-500 hover:scale-95 transition-transform'>
        <div className='flex flex-col items-center'>
          <div className="h-12 w-64 text-white uppercase text-3xl flex items-center justify-center">samurais  </div>
          <div className="h-48 w-48 bg-swordsman bg-cover"></div>
        </div>
        <div className='flex-grow text-xl text-white p-5 h-64'>
          More power at the battle ends!
        </div>
      </div>

    </div>
  </>

  )
}
