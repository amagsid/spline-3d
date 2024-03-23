import React from 'react';
import pricingCards from '../libs/PricingCards';

const Pricing = () => {
  interface IPricingCardProps {
    title: string;
    price: string;
    benefits: string[];
    oneliner: string;
  }

  const PricingCard = ({
    title,
    price,
    benefits,
    oneliner,
  }: IPricingCardProps) => {
    return (
      <div className=' text-white h-fit w-full rounded flex-col p-8 gap-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
        <div className='flex flex-col gap-2'>
          <div>
            <h6 className='text-2xl'>{title} </h6>
            <p className='text-sm text-zinc-500'>{oneliner}</p>
          </div>
          <p className='text-4xl font-bold'>
            ${price}{' '}
            <span className='text-sm font-normal text-zinc-500'>/ Month</span>{' '}
          </p>
        </div>
        <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>
          Try 7 days free!
        </button>
        <div className='flex flex-col w-full gap-4'>
          {/* {pricingCards.map((benefit, i) => {
            return (
              <p className='text-sm text-zinc-500 flex items-center gap-2'>
                <span
                  className='

'
                ></span>
              </p>
            );
          })} */}
        </div>
      </div>
    );
  };
  return (
    <section
      id='pricing'
      className='h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8'
    >
      <h1 className='text-white text-4xl md:text-5xl font-bold'></h1>
      <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 items-center h-fit w-full max-w-3xl gap-8  '>
        <h1 className='text-white'>pricing</h1>
        <PricingCard className='text-white'>
          {' '}
          <h1>pricing</h1>
        </PricingCard>
      </div>
    </section>
  );
};

export default Pricing;
