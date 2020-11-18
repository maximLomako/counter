import React from "react";
import s from './SettingsDisplay.module.css'
import SettingsDisplayInput from "./SettingsDisplayInput/SettingsDisplayInput";

type SettingsDisplayPropsType = {
  counterValue: number
  counterMinValue: number
  counterMaxValue: number
  changeCounterMinValue: (value: number) => void
  changeCounterMaxValue: (value: number) => void
}

const SettingsDisplay: React.FC<SettingsDisplayPropsType> = (props) => {
  return (
    <div className={s.settingsDisplay}>
      <SettingsDisplayInput
        title={'max Value'}
        counterValue={props.counterValue}
        value={props.counterMaxValue}
        onChange={props.changeCounterMaxValue}
        counterMinValue={props.counterMinValue}
        counterMaxValue={props.counterMaxValue}

      />
      <SettingsDisplayInput
        title={'start Value'}
        counterValue={props.counterValue}
        value={props.counterMinValue}
        onChange={props.changeCounterMinValue}
        counterMinValue={props.counterMinValue}
        counterMaxValue={props.counterMaxValue}
      />
    </div>
  )
}

export default SettingsDisplay;