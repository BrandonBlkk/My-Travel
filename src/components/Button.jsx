import React from 'react'

const Button = () => {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'><i class="ri-arrow-left-s-line"></i></button>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'>1</button>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'>2</button>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'>3</button>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'>...</button>
            <button className='border px-3 py-2 rounded hover:bg-slate-700 hover:text-white transition-colors duration-150 select-none'><i class="ri-arrow-right-s-line"></i></button>
        </div>
    </div>
  )
}

export default Button
