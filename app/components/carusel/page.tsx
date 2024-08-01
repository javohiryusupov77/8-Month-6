'use client';

import React, { ReactNode, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface CaruselProps {
    children: ReactNode;
}

 export default function Carusel({ children: slides }: CaruselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? React.Children.count(slides) - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === React.Children.count(slides) - 1 ? 0 : curr + 1));
  };

  return (
    <div className='overflow-hidden relative'>
      <div style={{ transform: `translateX(-${curr * 100}%)` }} className='flex transition-transform ease-out duration-500'>
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white text-black hover:bg-gray-200'>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white text-black hover:bg-gray-200'>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

