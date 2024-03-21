import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='snap-mandatory snap-y'>
      <Navbar />
      <div className='snap-mandatory snap-y '>
        <div className='h-screen w-screen snap-center bg-emerald-200 flex justify-center items-center text-9xl '>
          {' '}
          hey
        </div>
        <div className='h-screen snap-center bg-pink-400 flex justify-center items-center text-9xl'>
          {' '}
          hoi
        </div>
        <div className='h-screen snap-center border-b-orange-300 flex justify-center items-center text-9xl font-mono'>
          {' '}
          hello
        </div>
      </div>
    </main>
  );
}

function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter background-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-bvetween p-4'>
        <h6 className='font-bold'> Insightful </h6>
        <ul className='flex gap-12'>
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
          <li>
            <Link
              className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'
              href='#home'
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
