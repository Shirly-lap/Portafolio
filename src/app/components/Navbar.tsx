import React from 'react'
import { NavbarItem } from './ui/NavbarItem';


const navBarItems = [
  { path: "/about", title: " Acerca de Mí" },
  { path: "/skills", title: "Habilidades" },
  { path: "/projects", title: "Proyectos" },
  { path: "/contact", title: "Contacto" }
];


export const Navbar = () => {
  return (
    <>

      <nav className="hidden md:flex  flex-col  items-start gap-y-6 mt-7">
        {navBarItems.map((item, key)=>(
          <NavbarItem path={item.path} title={item.title} key={key}/>
        ))}

      </nav>
    </>
  )
}
