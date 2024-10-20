

import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'
import { IoLocationOutline } from 'react-icons/io5';


// interface ProfileProps{
//   name : string;
//   bannerUrl: string;
//   avatar: string;
// }



export default function About() {
  return (
    <>
      <div className="container-description bg-neutral-800  p-6  rounded-md w-64 ">
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Acerca de mi</h1>
        <span className='text-sm text-white text-justify'>
          Soy tecnóloga en ADSI (Análisis y Desarrollo de Sistemas de Información) y actualmente estoy cursando Ingeniería, lo que me permite seguir profundizando en mi carrera como desarrolladora.
        </span>

        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap ">
        <Link href="/" className="mt-2 flex items-center text-sm text-gray-500">           
            <IoLocationOutline className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />  Medellín - Colombia

          </Link>
          <Link href='https://github.com/Shirly-lap' className="mt-2 flex items-center text-sm text-gray-500 ">
            <FaGithub aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
            Mis repositorios
          </Link>
          <Link href="https://www.linkedin.com/in/shirly-paola-mejia-acosta-ab28a3214/" className="mt-2 flex items-center text-sm text-gray-500">
            <FaLinkedinIn aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
            Sigueme!
          </Link>

        </div>
      </div>

    </>

  )
}
