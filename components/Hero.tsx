import React from 'react';

const Hero = () => {
  return (
    <div className='flex-col'>
      <p className='mb-2 tracking-wider leading-loose'>
        インスタウェブはInstagramの投稿がWebサイトに自動反映される個人事業主や中小企業向けのサービスです。
      </p>
      <p className='mb-2 tracking-wide leading-loose'>
        スマートフォンで日々の販促や告知をするだけで、自社の顔となるWebサイトを新鮮に保ちコンテンツを充実させていくことができます。
      </p>
      <img className='w-full' src='/img/hero.png' />
    </div>
  );
};

export default Hero;
