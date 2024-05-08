import React from 'react'

const Header = () => {
    return (
      <div>
          <nav className='flex flex-col justify-between p-2'>
              <div className='flex justify-between'>
                  <div className='flex items-center gap-2 select-none'>
                      <div className='flex'>
                          <i class="ri-earth-line text-3xl text-blue-400 sm:text-4xl"></i>
                          <h1 className='text-slate-500 text-2xl font-semibold italic sm:text-3xl'>My Travel</h1>
                      </div>
                  </div>
                  <div className='flex items-center gap-1'>
                      <img className='w-9 rounded-full select-none' src="./images/Profile.png" alt="Profile Image" />
                      <p className='text-xs text-slate-400'>Developed by Brandon</p>
                  </div>
              </div>
          </nav>
      </div>
    )
}

export default Header
