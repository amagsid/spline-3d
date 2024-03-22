'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from './sections/Header';
import AboutMe from './sections/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col min-h-screen h-fit items-center justify-center relative'>
        <div className=' h-screen w-screen snap-mandatory snap-y overflow-scroll'>
          <div className='snap-start h-screen w-screen flex justify-center items-center text-9xl '>
            <Header />
          </div>
          <div className=' snap-start h-screen w-screen flex justify-center items-center '>
            <AboutMe />
          </div>
          <div className=' snap-start h-screen w-screen bg-orange-300 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-orange-300 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-orange-300 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-lime-400 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-teal-800 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-orange-300 flex justify-center items-center text-9xl font-mono'>
            hello
          </div>
          <div className=' snap-start h-screen w-screen bg-violet-300 flex justify-center items-center text-9xl font-mono'>
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
      className=' absolute  w-full h-16 bg-white/3 backdrop-blur-xl flex items-center justify-center font-extralight tracking-widest text-zinc-300'
    >
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'> Insightful </h6>
        <ul className='flex gap-12'>
          <li>
            <Link
              className='hover:text-white  transition-all text-xs sm:text-base'
              href='#home'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-white transition-all text-xs sm:text-base'
              href='#about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-white  transition-all text-xs sm:text-base'
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
