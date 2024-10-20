import React from 'react'
import Image from 'next/image'
import { GrView } from 'react-icons/gr'
import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'


const projects = [
  { name: 'Frontend', img: "", description: "" },
  { name: 'Diseño', img: "", skills: ['UX-UI', 'Figma', 'AWS', 'CI/CD'] },
  { name: 'Backend', img: "", skills: ['REST APIs', 'Python', 'Postman', 'Go'] },
  { name: 'Metodologías ágiles', img: "", skills: ['Scrum', 'Kanban', 'GitHub', 'GitLab'] },
  { name: 'Competencias humanas', img: "", skills: ['Trabajo en equipo', 'Comunicación asertiva', 'Liderazgo', 'Inglés A1'] },

]
export default function page() {
  return (
    <>
      <div className="container-projects flex flex-col gap-6">
        <div className="container-project bg-neutral-800  p-6  rounded-md w-full h-3/6	">
          <h2 className="text-xl font-bold text-white drop-shadow-lg">E-commerce Platform</h2>
          <span className='text-sm text-white text-justify'>Built a full-stack e-commerce solution using React, Node.js, and MongoDB.</span>
          <Image
            src="/prueba.gif"
            alt="avatar"
            width={470}
            height={270}
            className=" mt-3 h-min	"
          />
          <hr className='mt-6' />
          <div className="container-features flex  gap-3 items-center p-3">
            <Link href='' className='mt-2 flex items-center text-sm text-gray-500'>
              <GrView className='text-3xl mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' />Visitar
            </Link>

            <IoMdHeartEmpty className='text-3xl' />
            <Link href='https://github.com/Shirly-lap' className="mt-2 flex items-center text-sm text-gray-500 ">
            Mis repositorios
          </Link>

          </div>
        </div>


      </div>
    </>
  )
}
