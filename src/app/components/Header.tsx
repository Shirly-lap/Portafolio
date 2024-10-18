import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <>
      <header className=" flex flex-col container mx-auto rounded-md max-w-40 bg-neutral-800 justify-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar/>
        </div>
      </header>
    </>
  )
}
