"use client"

import Post from '@/app/components/Post'
import { usePathname } from 'next/navigation';
import React from 'react'


const experience = [
  { title: 'Desarrolladora FrontEnd', subtitle: "Expresia", date:"Nov 2023 - Actualmente " },
  { title: 'Desarrolladora FrontEnd  (Pasante)', subtitle: "Digital House", date:"Abr 2023 - Jul 2023"},
]
export default function page() {

  return (
    <>
      <div className="container-projects flex flex-col gap-6 ">
        {experience.map((item, key) => (
          <Post
            title={item.title}
            subtitle={item.subtitle}
            showFeatures={false} 
            showDivider ={false}
            date={item.date}

          />
        ))}

      </div>
    </>

  )
}
