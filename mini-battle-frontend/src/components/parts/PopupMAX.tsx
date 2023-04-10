import React from 'react'
import { IWarrior } from '../../interfaces/IWarrior'

export const PopupMAX = () => {
  return (
    <>    
    <div className='fixed left-0 top-0 w-full h-screen bg-slate-500 bg-opacity-50 flex justify-center items-center'>
      <div className="flex flex-col items-center h-52 w-full bg-black bg-opacity-60 justify-center">
        <p className='font-extrabold text-2xl h-5 text-white'>MAX LVL OF WARRIOR</p>
        <div className='w-52 h-52 img bg-MAX bg-contain'></div>
      </div>
    </div>
    </>

  )
}
