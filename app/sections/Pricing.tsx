import React from 'react';
import pricingCards from '../libs/PricingCards';
import { CheckCheck } from 'lucide-react';

const Pricing = () => {
  interface IPricingCardProps {
    title: string;
    price: number;
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
      <div className=' text-white h-fit w-full rounded flex-col p-4 gap-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
        <div className='flex flex-col gap-2'>
          <div>
            <h6 className='text-2xl'>{title} </h6>
            <p className='text-sm text-zinc-500'>{oneliner}</p>

            <p className='text-4xl font-bold'>
              ${price}{' '}
              <span className='text-sm font-normal text-zinc-500'>/ Month</span>{' '}
            </p>
          </div>
          <button className='bg-fuchsia-700 w-full rounded p-2 my-8 text-sm transition-colors hover:bg-fuchsia-800'>
            Try 7 days free!
          </button>

          <div className='flex flex-col w-full gap-4'>
            {benefits.map((benefit, i) => {
              return (
                <span
                  key={i}
                  className='text-sm text-zinc-500 flex items-center gap-2'
                >
                  <div className='flex gap-3'>
                    <CheckCheck />
                    <h1 className='w-full'> {benefit} </h1>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id='pricing'
      className='h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8'
    >
      <h1 className='text-white text-4xl md:text-5xl font-bold'>Plans</h1>
      <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8  '>
        {pricingCards.map(({ oneliner, title, price, benefits }) => {
          return (
            <PricingCard
              oneliner={oneliner}
              title={title}
              price={price}
              benefits={benefits}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
