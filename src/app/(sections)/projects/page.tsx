import React from 'react'
import Image from 'next/image'
import { GrView } from 'react-icons/gr'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaGithub, FaRegShareSquare } from 'react-icons/fa'
import Link from 'next/link'
import Post from '@/app/components/Post'

const projects = [
  { title: 'E-commerce Platform', subtitle: "Built a full-stack e-commerce solution using React, Node.js, and MongoDB.", pathImage: "/prueba.gif", linkPage: "/" },
  { title: 'Task Management App', subtitle: "Developed a real-time task management application with React and Firebase.", pathImage: "/prueba.gif", linkPage: "/"  },
  { title: 'Portfolio Website', subtitle: "Designed and implemented a responsive portfolio website using Next.js and Tailwind CSS.", pathImage: "/prueba.gif", linkPage: "/"  },
]


export default function Projects() {
  return (
    <>
      <div className="container-projects flex flex-col gap-6">
        {projects.map((item, key) => (
          <Post title={item.title} subtitle={item.subtitle} pathImage={item.pathImage} linkPage={item.linkPage}/>
        ))}
      </div>
    </>
  )
}
