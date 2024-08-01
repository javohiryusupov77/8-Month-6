'use client';

import React, { ReactNode, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
interface Caruselprops {
    children:ReactNode[]
}

export default function Carusel({ children:slides}:Caruselprops) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className='overflow-hidden relative'>
      <div style={{transform:`translateX(-${curr * 100}%)`}} className='flex trnsition-transform ease-out duration-500'>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white text-black-800 hover:bg-grey-80'>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white text-black-800 hover:bg-grey-80'>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
