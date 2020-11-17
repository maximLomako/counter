import React from "react";

type ButtonPropsType = {
  className: string
  title: string
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  return (
    <div className={props.className}
         onClick={props.onClick}>
      {props.title}
    </div>
  )
}