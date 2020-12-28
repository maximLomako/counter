import React from "react";
import s from './Display.module.css'

type DisplayPropsType = {
  counterValue: number
  counterMaxValue: number
}

const Display:React.FC<DisplayPropsType> = ({counterValue, counterMaxValue}) => {
  return (
    // <div className={`${counterValue} ${s.display}`}>{counterValue}</div>
    <div className={counterValue >= counterMaxValue ? `${s.display} ${s.redDisplay}` : s.display}>
      {counterValue}
    </div>
  )
}

export default Display;
