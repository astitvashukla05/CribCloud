import Image from 'next/image'

import React from 'react'

export default function DiscoverCard({imageSrc, title, description}) {
  return (
    <div className='px-4 py-12 shadow-lg rounded-lg  bg-primary-50 md:h-72 text-center'>
        <div className='bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto'>
            <Image src={imageSrc} alt={title} width={400} height={400} className=' h-full w-full' />
        </div>
        <h3 className='mt-8 text-xl font-medium text-gray-800'>{title}</h3>
        <p className='mt-8 text-base text-gray-500'>{description}</p>
    </div>
  )
}

