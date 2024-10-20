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
  linkPage: string;

}
const Post = ({ title, subtitle, pathImage, linkPage }: IpropsPost) => {

  return (
    <>
      <div className="container-project bg-neutral-800  p-6  rounded-md w-full h-3/6	">
        {/* <h2 className="text-xl font-bold text-white drop-shadow-lg">E-commerce Platform</h2> */}
        <Title className='text-xl font-bold text-white drop-shadow-lg' title={title} />
        <Subtitle className='text-sm text-white text-justify' subTitle={subtitle} />
        {/* <span className='text-sm text-white text-justify'>Built a full-stack e-commerce solution using React, Node.js, and MongoDB.</span> */}
        {pathImage && (
        <Image
          src={pathImage}
          alt={title}
          width={470}
          height={270}
          className="mt-3 h-min"
        />
      )}
        <hr className='mt-6' />
        <div className="container-features flex  gap-3 items-center ">
          <IconLink path={linkPage} iconType='view' className="mt-4 flex items-center text-sm text-white font-semibold	 hover:bg-background p-3 rounded-md" text='Visitar' />
          <ButtonIcon iconType='like' text='Me gusta' className='mt-4 flex items-center text-sm text-white font-semibold	 hover:bg-background p-3 rounded-md' />
          <ButtonIcon iconType='share' text='Share' className='mt-4 flex items-center text-sm text-white font-semibold	 hover:bg-background p-3 rounded-md' />
        </div>
      </div>
    </>

  )
}

export default Post