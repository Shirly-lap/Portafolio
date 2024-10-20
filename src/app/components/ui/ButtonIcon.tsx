import React, { useState } from 'react'
import { icons } from './icons/Icon';
import { button } from 'framer-motion/client';

interface IconButtonProps {
  text: string;
  iconType: keyof typeof icons;
  // onClick: () => void;
  className: string;
}


export const ButtonIcon = ({text, iconType, className}:IconButtonProps) => {
  const IconComponent= icons[iconType];

  return (
    <button className={className} >
      <IconComponent className='text-3xl mr-1.5 h-5 w-5 flex-shrink-0 ' /> {text}
    </button>
  )
}
