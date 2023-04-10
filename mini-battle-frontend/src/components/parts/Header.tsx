import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='w-full flex place-self-center bg-white p-3 rounded-md uppercase justify-center items-center'>

      <Link to={"/"} className='block none:hidden md:block font-extrabold hover:underline felx text-lg none:text-xs md:text-lg'>mini battle</Link>
      <Link to={"/"} className='hidden none:block md:hidden font-extrabold hover:underline felx mx-1 text-lg none:text-xs md:text-lg none:mx-1 md:mx-2'>mb</Link>
      <span className='spacer flex-grow block none:hidden md:block'></span>
      <Link to={"/vikings-realm"}  className='mx-1 font-extrabold text-orange-500 hover:underline text-lg none:text-xs md:text-lg none:mx-1 md:mx-1'>vikings</Link>
      <Link to={"/knights-realm"}  className='mx-1 font-extrabold text-blue-500 hover:underline text-lg none:text-xs md:text-lg none:mx-1 md:mx-1'>knights</Link>
      <Link to={"/samurais-realm"} className='mx-1 font-extrabold text-rose-500 hover:underline text-lg none:text-xs md:text-lg none:mx-1 md:mx-1'>samurais</Link>

    </div>
    
  )
}
