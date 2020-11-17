import React from "react";
import s from './Option.module.css'

const Option = () => {
  return (
    <div className={s.customOption}>
      <div className="optionTitle">Option</div>
      <input className={s.optionTextArea} type='number' value={0} min={0} max={10} step={1}></input>
    </div>
  )
}

export default Option;