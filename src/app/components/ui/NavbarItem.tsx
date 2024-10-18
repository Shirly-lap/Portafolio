"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export interface ItemProps {
  path: string;
  title: string;
}

export const NavbarItem = ({path, title}: ItemProps) => {
  //capturamos la url en la que nos encontramos actualmente para validar y poder cambiar el color 
  const currentPath = usePathname();


  return (
    <Link href={path} className={` text-white  hover:text-gray-500 ${currentPath === path ? "text-orange-500 border-b" : ""}`}>{title}</Link>
  )
}
