import React from 'react'

export interface IpropsTitle {
  title: string,
  className: string,

}
export const Title = ({ title, className }: IpropsTitle) => {
  return (
    <>
      <h1 className={className} >{title}</h1>
    </>

  )
}
