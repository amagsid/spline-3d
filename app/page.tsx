'use client';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-screen h-fit items-center justify-center relative'>
        <div className=' h-screen w-screen snap-mandatory snap-y overflow-scroll'>
          <div className='snap-start h-screen w-screen flex justify-center items-center text-9xl '>
            <header
              id='home'
              className='flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden'
            >
              <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-4xl font-black text-gray-100 md:text-8xl'>
                    Insightful
                  </h1>
                  <h2 className='text-md md:text-2xl'>Start growing today!</h2>
                </div>
                <p className='max-w-md text-sm md:text-base text-zinc-500'>
                  Insightful is an AI-powered sales optimization tool that
                  provides data-driven insights to boost sales performance.
                </p>
                <div className='w-full flex items-center justify-center md:justify-start gap-4'>
                  <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>
                    Try 7 days free!
                  </button>

                  <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>
                    Contact
                  </button>
                </div>
              </div>

              <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
                <Spline
                  className='w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start'
                  scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'
                />
              </div>
            </header>
          </div>
          <div className=' snap-start h-screen w-screen bg-pink-400 flex justify-center items-center text-9xl'>
            hoi
          </div>
          <div className=' snap-start h-screen w-screen bg-orange-300 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
        </div>
      </main>
    </>
  );
}

function Navbar() {
  return (
    <div
      style={{ zIndex: 100 }}
      className=' absolute  w-full h-16 bg-white/3 backdrop-blur-xl flex items-center justify-center'
    >
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'> Insightful </h6>
        <ul className='flex gap-12'>
          <li>
            <Link
              className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'
              href='#home'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'
              href='#about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'
              href='#pricing'
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
