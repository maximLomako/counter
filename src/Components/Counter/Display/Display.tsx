import React from "react";
import s from './Display.module.css'

type DisplayPropsType = {
  counterValue: number
}

export const Display: React.FC<DisplayPropsType> = ({counterValue}) => {


  return (
    <div className={counterValue >= 5 ? `${s.display} ${s.displayRed}`: `${s.display}`}>
      {counterValue}
    </div>
  )
}

