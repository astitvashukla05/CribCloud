
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <footer className='border-t border-gray-200 py-20'>
        <div className='max-w-4xl mx-auto px-6 sm:px-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4'>
                    <Link href='/' className='text-xl font-bold' scroll={false}>CRIBCLOUD</Link>
                </div>
                <nav className='mb-4'>
                    <ul className='flex space-x-6'>
                        <li>
                            <Link href='/about' className='text-gray-600 hover:text-gray-900 hover:underline'>About US</Link>
                        </li>
                        <li>
                            <Link href='/services' className='text-gray-600 hover:text-gray-900 hover:underline'>Services</Link>
                        </li>
                        <li>
                            <Link href='/contact' className='text-gray-600 hover:text-gray-900 hover:underline'>Contact</Link>
                        </li>
                         <li>
                            <Link href='/faqs' className='text-gray-600 hover:text-gray-900 hover:underline'>FAQ</Link>
                        </li>
                         <li>
                            <Link href='/terms' className='text-gray-600 hover:text-gray-900 hover:underline'>Terms</Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex space-x-4 mb-4'>
                    <a href='#' aria-label='Facebook' className='text-[#1877F2] hover:text-gray-900'>
                        <FontAwesomeIcon icon={faFacebook}  className="h-7 w-7"/>
                    </a>
                     <a href='#' aria-label='Instagram' className=' hover:text-gray-900 h-6 w-6 text-[#E4405F]'>
                        <FontAwesomeIcon icon={faInstagram}  className="h-7 w-7"/>
                    </a>
                    <a href='#' aria-label='LinkedIn' className=' hover:text-gray-900 h-6 w-6 text-[#0077B5]'>
                        <FontAwesomeIcon icon={faLinkedin}  className="h-7 w-7"/>
                    </a>
                    <a href='#' aria-label='X' className=' hover:text-gray-900 h-6 w-6 text-neutral-900'>
                        <FontAwesomeIcon icon={faX}  className="h-7 w-7"/>
                    </a>
                    <a href='#' aria-label='YouTube' className=' hover:text-gray-900 h-6 w-6 text-[#FF0000]'>
                          <FontAwesomeIcon icon={faYoutube}  className="h-7 w-7"/>
                    </a>
                      
                </div>
            </div>
            <dic className='mt-8 text-center text-gray-500 flex justify-center space-x-4'>
                <span>© {new Date().getFullYear()} CRIBCLOUD. All rights reserved.</span>
                <Link href='/privacy' >Privacy Policy</Link>
                <Link href='/terms' >Terms of Service</Link>
                <Link href='/cookies' >Cookie Policy</Link>
            </dic>
        </div>
    </footer>
  )
}
 