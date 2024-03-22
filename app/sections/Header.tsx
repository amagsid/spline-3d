import Spline from '@splinetool/react-spline';
import Image from 'next/image';

const Header = () => {
  return (
    <section>
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
              Machine Learning-powered growth.
            </h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>
            Harness the power of AI sales optimization and get an all-in-one
            tool to get data-driven insights to boost sales performance today.
          </p>
          <div className=' tracking-wider w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 sm:text-base rounded-xl bg-white text-black font-light hover:bg-pink-600 hover:text-white transition-colors'>
              Get 7 days free trial
            </button>

            <button className=' tracking-wider w-48 h-12  sm:text-base rounded-xl hover:bg-white hover:text-pink-600 font-light transition-colors'>
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
    </section>
  );
};

export default Header;
