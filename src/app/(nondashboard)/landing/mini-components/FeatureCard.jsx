import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeatureCard({imageSrc, title, description,linkText, linkHref}) {
  return (
    <div className='text-center'>
        <div className='p-4 rounded-lg mb-4 flex items-center justify-center h-48'>
            <Image src={imageSrc} alt={title} width={400} height={400} className='object-contain h-full w-full' />

        </div>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='mb-4'>{description}</p>
        <Link href={linkHref} className='inline-block border border-gray-300 rounded px-4 py-2 hover:bg-slate-100' scroll={false} >{linkText}</Link> 
    </div>
  )
}

export default FeatureCard