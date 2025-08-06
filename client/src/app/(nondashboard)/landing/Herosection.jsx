'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export default function Herosection() {
  return (
    <div className='relative h-screen'>
        <Image
        src="/hero-bg.png"
        alt="Landing Splash"
        fill
        className='object-cover object-center'
        priority
        />
        <div className='absolute inset-0 bg-black/50'>
        <motion.div initial={{ opacity: 0 ,y:20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2  text-center w-full'>
            <div className='max-w-4l mx-auto px-16 sm:px-12'>
                <h1 className='text-5xl font-bold text-white mb-4'>
                    Start your journey with Crib Cloud
                </h1>
                <p className='text-xl text-white mb-8'>
                    Explore wide range of properties and find your perfect home!!!
                </p>
                <div className='flex justify-center'>
                    <Input type="text" value="" placeholder="Search for properties..." 
                    className='w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12' 
                    onChange={()=>{}} />
                    <Button onClick={()=>{}} className='bg-secondary-600 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-700 h-12 w-24'>Search</Button>
                </div>
            </div>
        </motion.div>
        </div>
    </div>
  )
}
