import React, {ChangeEvent} from "react";
import s from './SettingsDisplayInput.module.css'

type SettingsDisplayInputPropsType = {
  title: string
  counterMinValue: number
  counterMaxValue: number
  counterValue: number
  value: number
  onChange: (value: number) => void
}

const SettingsDisplayInput: React.FC<SettingsDisplayInputPropsType> = (props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(+e.currentTarget.value)
  }

  return (
    <div className={s.settingsDisplayInput}>
      <h3 className={props.counterMinValue >= props.counterMaxValue ?  `${s.settingsDisplayInputTitle} ${s.settingsDisplayInputTitleError}`
        : `${s.settingsDisplayInputTitle}`}>{props.title}</h3>
      <input onChange={onChangeHandler}
        type="number"
             className={props.counterMinValue >= props.counterMaxValue ?  `${s.settingsDisplayInputArea} ${s.settingsDisplayInputAreaError}`
               : `${s.settingsDisplayInputArea}`}
             value={props.value}/>
    </div>
  )
}

export default SettingsDisplayInput;