import React from 'react'
import { Title } from './ui/Title'
import Image from 'next/image'
import { Subtitle } from './ui/Subtitle';
import IconLink from './ui/IconLink';
import { ButtonIcon } from './ui/ButtonIcon';

export interface IpropsPost {
  title: string;
  subtitle: string;
  pathImage?: string;
  linkPage?: string;
  showFeatures?: boolean;
  showDivider?: boolean;
  date?: string;

}

const Post = ({ title, subtitle, pathImage, linkPage, showFeatures = true, date, showDivider = true }: IpropsPost) => {
  return (
    <div className="container-project bg-neutral-800 p-6 rounded-md w-full h-3/6 gap-2">
      <Title className='text-xl font-bold text-white drop-shadow-lg' title={title} />
      <Subtitle className='text-sm text-white text-justify' subTitle={subtitle} />
      <h3 className='text-sm text-justify text-gray-400 font-semibold'>{date}</h3>
      {pathImage && (
        <Image
          src={pathImage}
          alt={title}
          width={470}
          height={270}
          className="mt-3 h-min"
        />
      )}

      {showDivider && (
        <hr className='mt-6' />

      )}
      {/* Renderizar container-features solo si showFeatures es true */}
      {showFeatures && (
        <div className="container-features flex gap-3 items-center">
          {linkPage && (
            <IconLink path={linkPage} iconType='view' className="mt-4 flex items-center text-sm text-white font-semibold hover:bg-background p-3 rounded-md" text='Visitar' />

          )}
          <ButtonIcon iconType='like' text='Me gusta' className='mt-4 flex items-center text-sm text-white font-semibold hover:bg-background p-3 rounded-md' />
          <ButtonIcon iconType='share' text='Share' className='mt-4 flex items-center text-sm text-white font-semibold hover:bg-background p-3 rounded-md' />
        </div>
      )}
    </div>
  );
}


export default Post