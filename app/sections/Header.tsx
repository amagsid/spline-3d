'use client';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import { CircleArrowUp } from 'lucide-react';

const Header = () => {
  return (
    <section>
      <div className='flex flex-col h-screen'>
        <header
          id='home'
          className='flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden'
        >
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-black text-gray-100 md:text-8xl'>
                Insightful
              </h1>
              <h2 className='text-md md:text-2xl'>
                Supercharge sales with machine learning
              </h2>
            </div>
            <p className='max-w-md text-sm md:text-base text-zinc-500'>
              Fueled by advanced algorithms, Insight leverages machine learning
              to analyze your sales data, identify patterns, and provide
              actionable insights.
            </p>
            <div className=' tracking-wider w-full flex items-center justify-center md:justify-start gap-4'>
              <Link href='/tour'>
                <button className='w-48 h-12 sm:text-base rounded-xl bg-white text-black font-light hover:bg-pink-600 hover:text-white transition-colors'>
                  Know more
                </button>
              </Link>

              <button className=' tracking-wider w-48 h-12  sm:text-base rounded-xl hover:bg-white hover:text-pink-600 font-light transition-colors'>
                Contact
              </button>
              {/* 
            <button className='w-48 h-12 sm:text-base rounded-xl bg-white text-black font-light hover:bg-pink-600 hover:text-white transition-colors'>
              Free trial
            </button> */}
            </div>
          </div>

          <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
            <Spline
              className='w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start'
              scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'
            />
          </div>
        </header>
        <Link
          href='#solutions'
          className='pb-2 flex h-8 flex-col items-center justify-center text-f  hover:text-fuchsia-300'
        >
          <div className='flex items-center justify-end flex-col hover:text-fuchsia-300  w-full'>
            {' '}
            <h1 className='font-thin  tracking-widest'>solutions </h1>
            <CircleArrowUp className=' hover:text-fuchsia-300 text-zinc-300' />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Header;
