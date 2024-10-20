import Link from 'next/link'

import React from 'react'
import Image from 'next/image'
import About from './about/page'
import { Header } from '../components/Header'
import { Title } from '../components/ui/Title'
import { Subtitle } from '../components/ui/Subtitle'
import { IoIosContact } from 'react-icons/io'
import { MdMarkEmailUnread } from 'react-icons/md'
import { ButtonIcon } from '../components/ui/ButtonIcon'


interface Iprops {
  children: React.ReactNode
}
export default function layout({ children }: Iprops) {
  return (
    <>
      <div className=" flex flex-col">
        <div className="hero flex-grow container mx-auto p-6  w-3/5">
          <div className="relative rounded-md ">
            <div className="h-44 md:h-64 lg:h-40  overflow-hidden">
              <Image
                src="/banner.png"
                alt="Profile banner"
                width={1500}
                height={500}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="absolute bottom-0 top-0 left-0 right-0 p-4 md:p-6 flex items-end">
              <div className="flex items-center space-x-4">
                <div className="absolute">
                  <Image
                    src="/avatar.jpg"
                    alt="avatar"
                    width={170}
                    height={170}
                    className="rounded-full border-4 border-white  "
                  />
                </div>
              </div>
              <div className="ml-auto space-x-2">

                {/* <Link href="/contact" type='email' className="bg-neutral-800 text-white hover:bg-background rounded-lg p-3 flex items-center gap-2 font-semibold ">
                  <MdMarkEmailUnread /> Correo

                </Link> */}

                <ButtonIcon text='Correo' iconType='email' className='bg-neutral-800 text-white hover:bg-background rounded-lg p-3 flex items-center gap-1 font-semibold '/>
              </div>
            </div>

          </div>
          <div className="container-description bg-neutral-800 rounded-b-lg p-7 ">
            <Title title='Shirly Mejia Acosta' className='text-2xl md:text-3xl font-bold text-white drop-shadow-lg mt-12'/>
            <Subtitle subTitle='Systems Engineer | FrontEnd Developer | Diseñador UI/UX | React | TypeScript | Next | Javascript | Figma | Scrum |GitHub | GitLab' className='text-sm text-white'/>
          </div>
      </div>

      </div>

      <main className='flex-grow container mx-auto p-6 flex gap-5 w-3/5  '>
        <div className="container-sidebar">
          <About />
        </div>

        <div className="container-children w-full">
          <Header />
          {children}
        </div>

      </main>

      <footer className=" py-12">

        <p className="text-center text-gray-400 text-sm">
          © 2024 ShirDev, Inc. All rights reserved.
        </p>
      </footer>


    </>
  )
}
