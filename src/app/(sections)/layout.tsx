import Link from 'next/link'
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react'

import React from 'react'
import { IoIosContact } from 'react-icons/io'
import Image from 'next/image'
import { Header } from '../components/Header'

interface Iprops {
  children: React.ReactNode
}
export default function layout({ children }: Iprops) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="hero flex-grow container mx-auto p-6 h-10">
          <div className="relative rounded-md ">
            <div className="h-44 md:h-64 lg:h-48 w-full overflow-hidden">
              <Image
                src="/banner.png"
                alt="Profile banner"
                width={1500}
                height={500}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src="/avatar.jpg"
                    alt="avatar"
                    width={128}
                    height={128}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white  "
                  />
                </div>
              </div>
              <div className="ml-auto space-x-2">
                {/* <button className="bg-white text-gray-800 hover:bg-gray-100">
              Contact
            </button> */}
                {/* <Link href="/contact" className="bg-neutral-800 text-white hover:bg-gray-100 rounded-lg p-3 flex items-center gap-2 font-semibold">
                  <IoIosContact /> Contact
                </Link> */}
              </div>
            </div>

          </div>
          <div className="container-description bg-neutral-800 rounded-b-lg p-7">
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Shirly Mejia Acosta</h1>
            <span className='text-sm text-white'>
              Systems Engineer | FrontEnd Developer | Diseñador UI/UX | React | TypeScript | Next | Javascript | Figma | Scrum |GitHub | GitLab
            </span>
          </div>
        </div>
        <main className='flex-grow container mx-auto p-6 flex gap-4'>
          <Header />
          {children}

        </main>
      </div>

      <footer className=" py-12">

          <p className="text-center text-gray-400 text-sm">
            © 2024 ShirDev, Inc. All rights reserved.
          </p>
      </footer>


    </>
  )
}
