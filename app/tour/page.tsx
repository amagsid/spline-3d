'use client';
import Link from 'next/link';
import React from 'react';
import UseAnimations from 'react-useanimations';
import { CircleArrowUp } from 'lucide-react';
import loading2 from 'react-useanimations/lib/loading2';

const tour = () => {
  return (
    <>
      <div className='h-screen w-screen snap-mandatory snap-y overflow-scroll  '>
        <div className='snap-start h-screen w-screen  '>
          <div className=' flex flex-col justify-center items-center h-full gap-8'>
            <h1 className='text-6xl md:text-4xl font-thin '> coming soon</h1>
            <UseAnimations
              className='fill-black'
              fillColor='white'
              animation={loading2}
              size={186}
            />
            <Link href='/'>
              <button className='w-40 h-10 sm:text-base rounded-xl bg-white text-black font-light hover:bg-pink-600 hover:text-white transition-colors'>
                Back to home
              </button>
            </Link>

            <div className='flex items-center justify-end flex-col h-[14rem] w-full'>
              {' '}
              <Link
                href='#tour-start'
                className='flex flex-col items-center justify-center'
              >
                <CircleArrowUp className=' hover:text-pink-600' />

                <h1 className='font-thin'>swipe up </h1>
              </Link>
            </div>
          </div>
        </div>
        <div
          id='tour-start'
          className='text-6xl md:text-8xl font-bold  snap-start h-screen w-screen text-fuchsia-200  flex justify-center items-center '
        >
          Swip up
        </div>
        <div className=' font-bold snap-start h-screen w-screen text-pink-300 text-6xl md:text-8xl flex justify-center items-center '>
          or down once
        </div>
        <div className=' font-bold  snap-start h-screen w-screen text-fuchsia-300 text-6xl md:text-8xl flex justify-center items-center '>
          to replicate
        </div>
        <div className=' font-bold snap-start h-screen w-screen text-6xl md:text-8xl text-pink-400 flex justify-center items-center'>
          snappy page
        </div>
        <div className=' font-bold snap-start h-screen w-screen text-6xl md:text-8xl text-fuchsia-200 text-center flex justify-center items-center'>
          mobile app-like behaviour
        </div>
      </div>
    </>
  );
};

export default tour;
