import React from 'react'


export interface IpropsSubTitle {
  className: string,
  subTitle: string,
}
export const Subtitle = ({className, subTitle}: IpropsSubTitle) => {
  return (
    <>
    <span className={className}>{subTitle}</span>
    </>
  )
}
