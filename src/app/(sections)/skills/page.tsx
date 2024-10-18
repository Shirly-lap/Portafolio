"use client"

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Database, Globe, Cpu, Cloud, Figma } from 'lucide-react'
import { DiScrum } from 'react-icons/di'
import { RiTeamLine } from 'react-icons/ri'

const skills = [
  { name: 'Frontend', icon: Globe,  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Diseño', icon: Figma, skills: ['UX-UI', 'Figma', 'AWS', 'CI/CD'] },
  { name: 'Backend', icon: Terminal,  skills: ['REST APIs', 'Python', 'Postman', 'Go'] },
  { name: 'Metodologías ágiles', icon: DiScrum, skills: ['Scrum', 'Kanban', 'GitHub', 'GitLab'] },
  { name: 'Competencias humanas', icon:   RiTeamLine, skills: ['Trabajo en equipo', 'Comunicación asertiva', 'Liderazgo', 'Inglés A1'] },

]

export default function page() {
  const [activeSkill, setActiveSkill] = useState(skills[0])

  return (
    <>
        <section className="container-description bg-neutral-800  p-6 rounded-md w-screen	 ">
      {/* <span className='text-sm text-white text-justify'>
          Soy tecnóloga en ADSI (Análisis y Desarrollo de Sistemas de Información) y actualmente estoy cursando Ingeniería, lo que me permite seguir profundizando en mi carrera como desarrolladora.  Con un enfoque en el desarrollo de software, me especializo en tecnologías como React, TypeScript, Next.js y JavaScript para crear aplicaciones web dinámicas y escalables.
          Tengo conocimientos en diseño de interfaces de usuario (UI/UX) y experiencia en la creación de mockups utilizando Figma, lo que me permite colaborar de manera efectiva en la conceptualización y prototipado de proyectos. Además, aplico metodologías ágiles como Scrum para asegurar una gestión eficiente del ciclo de vida del proyecto.
          El manejo de herramientas de control de versiones como GitHub y GitLab me ha permitido trabajar en equipos de desarrollo colaborativos y optimizar procesos para cumplir con los objetivos. Siempre busco aprender y aplicar nuevas tecnologías para entregar soluciones innovadoras y eficientes.
        </span> */}
          <div className="min-w-full	">
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  className={`p-4 rounded-full bg-orange-500 text-white shadow-lg hover:shadow-xl transition-shadow`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSkill(skill)}
                >
                  <skill.icon size={32} />
                </motion.button>
              ))}
            </div>
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gris rounded-lg shadow-xl p-8 "
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <activeSkill.icon className="mr-2" />
                {activeSkill.name}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {activeSkill.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <Code className="mr-2 text-gray-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
    </>

  )
}
