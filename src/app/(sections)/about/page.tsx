

import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'


// interface ProfileProps{
//   name : string;
//   bannerUrl: string;
//   avatar: string;
// }



export default function page() {
  return (
    <>
      <div className="container-description bg-neutral-800  p-6  rounded-md h-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Acerca de mi</h1>
        <span className='text-sm text-white text-justify'>
          Soy tecnóloga en ADSI (Análisis y Desarrollo de Sistemas de Información) y actualmente estoy cursando Ingeniería, lo que me permite seguir profundizando en mi carrera como desarrolladora.  Con un enfoque en el desarrollo de software, me especializo en tecnologías como React, TypeScript, Next.js y JavaScript para crear aplicaciones web dinámicas y escalables.
          Tengo conocimientos en diseño de interfaces de usuario (UI/UX) y experiencia en la creación de mockups utilizando Figma, lo que me permite colaborar de manera efectiva en la conceptualización y prototipado de proyectos. Además, aplico metodologías ágiles como Scrum para asegurar una gestión eficiente del ciclo de vida del proyecto.
          El manejo de herramientas de control de versiones como GitHub y GitLab me ha permitido trabajar en equipos de desarrollo colaborativos y optimizar procesos para cumplir con los objetivos. Siempre busco aprender y aplicar nuevas tecnologías para entregar soluciones innovadoras y eficientes.
        </span>

        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <Link href='https://github.com/Shirly-lap' className="mt-2 flex items-center text-sm text-gray-500">
          <FaGithub aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"/>
            Mis repositorios
          </Link>
          <Link href="https://www.linkedin.com/in/shirly-paola-mejia-acosta-ab28a3214/" className="mt-2 flex items-center text-sm text-gray-500">
            <FaLinkedinIn aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"/> 
            Sigueme!
          </Link>
        </div>
      </div>

    </>

  )
}
