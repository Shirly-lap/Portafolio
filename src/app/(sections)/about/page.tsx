

import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'
import { IoLocationOutline } from 'react-icons/io5';
import IconLink from '@/app/components/ui/IconLink';
import { ButtonIcon } from '@/app/components/ui/ButtonIcon';
import { Title } from '@/app/components/ui/Title';
import { Subtitle } from '@/app/components/ui/Subtitle';

export default function About() {
  return (
    <>
      <div className="container-description bg-neutral-800  p-6  rounded-md w-64 ">
        <Title title='Acerca de mi' className='text-2xl md:text-3xl font-bold text-white drop-shadow-lg' />
        <Subtitle subTitle='Soy tecnóloga en ADSI (Análisis y Desarrollo de Sistemas de Información) y actualmente estoy cursando Ingeniería, lo que me permite seguir profundizando en mi carrera como desarrolladora.' className='text-sm text-white text-justify' />
        {/* <hr className='mt-3 mb-2 text-gray-500' /> */}
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap ">
          <ButtonIcon iconType='location' text='Medellín - Colombia' className='mt-2 flex items-center text-sm text-gray-500' />
          <IconLink path='https://github.com/Shirly-lap' iconType='github' text='Mis repositorios' className='mt-2 flex items-center text-sm text-gray-500' />
          <IconLink path='https://www.linkedin.com/in/shirly-paola-mejia-acosta-ab28a3214/' iconType='linkedin' text='Sigueme!' className='mt-2 flex items-center text-sm text-gray-500' />
        </div>
      </div>
    </>

  )
}
