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
    <Link href={path} className={`mb-4 p-2 text-white    hover: ${currentPath === path ? "rounded-lg bg-neutral-800 " : ""}`}>{title}</Link>
  )
}
