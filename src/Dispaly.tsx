import React from "react";

type DisplayPropsType = {
  value: number
}

export const Display:React.FC<DisplayPropsType> = ({value}) => {



  return (
    <div className={value >= 5 ? 'display displayRed' : 'display'}>
      {value}
    </div>
  )
}