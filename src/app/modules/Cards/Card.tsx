'use client';
import React from 'react';

type cardProps = {
    name: String;
    icon: React.ReactNode;
};

const Card: React.FC<cardProps> = ({ name, icon }: any) => {
  return (
    <div className='flex items-center gap-x-2 p-4 rounded-lg shadow-lg bg-white'>
      <svg
        className='w-6 h-6 text-gray-900'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        {icon}
      </svg>
      <span className='text-gray-900 font-medium'>{name}</span>
    </div>
  );
};

export default Card