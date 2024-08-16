import Link from 'next/link'
import React from 'react'

function Guide() {
  return (
    <div className='container xl:max-w-screen-xl py-10 md:py-16 text-gray-700 flex  justify-between md:px-20  items-center gap-4'>
        <Link data-aos="zoom-in" data-aos-duration="300" className='p-4 rounded-md shadow-xl w-[100px] md:w-[200px] md:text-sm border text-center text-xs cursor-pointer' href="/Menu">Menu</Link>
        <Link data-aos="zoom-in" data-aos-duration="800" className='p-4 rounded-md shadow-xl w-[100px] md:w-[200px] md:text-sm border text-center text-xs cursor-pointer' href="/Categories">Categories</Link>
        <Link data-aos="zoom-in" data-aos-duration="1200" className='p-4 rounded-md shadow-xl w-[100px] md:w-[200px] md:text-sm border text-center text-xs cursor-pointer' href="/">Discount</Link>
    </div>
  )
}

export default Guide
