import React from 'react'
import { NavbarItem } from './ui/NavbarItem';


const navBarItems = [
  { path: "/projects", title: "Proyectos" },
  { path: "/experience", title: "Experiencia" },
  { path: "/education", title: "Educación" }
];


export const Navbar = () => {
  return (
    <>

      <nav className="hidden md:flex gap-7 ">
        {navBarItems.map((item, key)=>(
          <NavbarItem path={item.path} title={item.title} key={key}/>
        ))}

      </nav>
    </>
  )
}
