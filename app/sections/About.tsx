import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import infoCards from '../libs/InfoCard';
import {
  AlarmClockOff,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  LucideIcon,
} from 'lucide-react';
import { ReactElement } from 'react';

const About = () => {
  const inViewVariants = {
    visible: { opacity: 1, scale: 1, y: 0, x: 0, rotateY: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: -150,
      x: -200,
      // rotateX: 90,
      rotateY: 90,
    },
  };

  const [inViewRef, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  interface IInfoCardProps {
    title: string;
    Icon: LucideIcon;
    children: ReactElement<any>;
  }
  const InfoCard = ({ title, Icon, children }: IInfoCardProps) => {
    return (
      <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 bg-clip-padding backfrop-filter backdrop-blur-sm bg-opacity-20'>
        <div className='p-4 bg-fuchsia-700 rounded-full'>
          {' '}
          <Icon />{' '}
        </div>
        <div>
          <h3 className='text-lg font-bold sm:text-xl'> {title}</h3>
        </div>
        <div> {children}</div>
      </div>
    );
  };

  return (
    <section
      id='about'
      className='flex relative items-center justify-center p-8 w-full h-full'
    >
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={inViewVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        ref={inViewRef}
        className='absolute -z-10 h-full w-full overflow-hidden'
      >
        <Image
          alt='whirl'
          src='/whirl.svg'
          fill
          className='absolute object-cover w-full overflow-visible sm:rotate-90'
        />
      </motion.div>
      <div className='w-full h-full items-center justify-center flex flex-col gap-8 max-w-7xl'>
        {' '}
        <h3 className='text-4xl md:text-5xl font-bold'>No More time Wasted</h3>
        <div className='w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 gap-4 justify-between relative'>
          {infoCards.map((infoCard) => {
            return (
              <InfoCard
                key={infoCard.id}
                Icon={infoCard.icon}
                title={infoCard.title}
              >
                <p>PARAGAGAGA</p>
              </InfoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
