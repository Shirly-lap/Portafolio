import Post from '@/app/components/Post'
import React from 'react'

const education = [
  { title: "Entrenamiento en desarrollo de software", subtitle: "Riwi", date: "Febrero 2024 - Noviembre 2024" },
  { title: "Ingeniería de Sistemas", subtitle: "CUN-Corporacion unificada nacional de Educación Superior", date: "2023-2025" },
  { title: "Professional Developer", subtitle: "Digital House", date: "2022-2023" },
  { title: "Tecnólogo Análisis y Desarrollo de Sistemas de Información", subtitle: "Servicio Nacional de Aprendizaje SENA", date: "2020-2022" }
]
export default function page() {
  return (
    <div className="container-educataion flex flex-col gap-6">
      {education.map((item, key)=>(
        <Post title={item.title} subtitle={item.subtitle} date={item.date} showDivider={false} showFeatures={false} key={key}/>
      ))}
    </div>
  )
}
