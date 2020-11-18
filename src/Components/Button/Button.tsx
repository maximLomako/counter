import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
  buttonTitleValue: string
  counterValue: number
  counterMinValue: number
  counterMaxValue: number
  className: string
  onClick: () => void

}

const Button: React.FC<ButtonPropsType> = ({
                                             counterValue, counterMinValue,
                                             counterMaxValue, buttonTitleValue, className, onClick
                                           }) => {
  return (
    <div className={className} onClick={onClick}>{buttonTitleValue}</div>
  )
}

export default Button;