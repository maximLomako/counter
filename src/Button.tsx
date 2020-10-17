import React from "react";

type ButtonPropsType = {
  className: string
  title: string
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (
  {className, title, onClick}) => {



  return (
    <div className={className} onClick={onClick}>
      {title}
    </div>
  )
}