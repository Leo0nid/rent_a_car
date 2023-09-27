'use client';

import Image from 'next/image';
import { CustomButton } from '.';


const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Найти, забронировать или арендовать автомобиль - быстро и легко!
        </h1>

        <p className="hero__subtitle">
          Упростите процесс аренды автомобиля с помощью нашей удобной процедуры бронирования.
        </p>
        <CustomButton
          title="Изучить автомобили"
          containerStyles="bg-primary-blue
            text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' fill className='object-contain'/>
        </div>
        <div className='hero__image-overlay'/>
      </div>
    </div>
  );
};

export default Hero;
