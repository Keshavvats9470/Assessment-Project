import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-[#FFFF] top-0 sticky shadow drop-shadow-lg shadow-blue-500'>
            <div className='flex justify-between max-w-7xl m-auto p-3'>
                <div className='mt-1 flex gap-16 items-center'>
                    <div>
                        <img src='EDYODA.png'
                            alt='logo'
                        />
                    </div>

                    <div className='flex items-center'>
                        <div className='flex gap-3'>
                            <p className='font-medium hover:cursor-pointer '>Courses</p>
                            <img
                                className='hover:animate-bounce cursor-pointer'
                                src="downarr.svg" alt="" />
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='flex gap-3'>
                            <p className='font-medium hover:cursor-pointer'>Programs</p>
                            <img
                                className='hover:animate-bounce cursor-pointer'
                                src="downarr.svg" alt="" />
                        </div>
                    </div>
                </div>


                <div className='flex items-center gap-5'>

                    <div className='flex items-center gap-12'>
                        <div>
                            <img src="SearchIcon.svg" alt="" />
                        </div>
                        <p className='font-medium hover:underline hover:decoration-2 hover:decoration-blue-600 hover:cursor-pointer'>Login</p>

                        <button className='text-[#FFFF] bg-gradient-to-r from-[#0096FF] px-[42px] py-[8px] rounded-full uppercase to-[#0048FF]'>join now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
