import React from 'react'
import { icons } from './icons/Icon';
import Link from 'next/link';

interface IconLinkProps{
  path: string;
  text : string;
  iconType: keyof typeof icons;
  className:string;
}
const IconLink = ({path, text, iconType, className}: IconLinkProps) => {
  const IconComponent= icons[iconType];
  return (
    <Link href={path} className={className}>
      <IconComponent className='text-3xl mr-1.5 h-5 w-5 flex-shrink-0 '/> {text}
    </Link>
  )
}

export default IconLink