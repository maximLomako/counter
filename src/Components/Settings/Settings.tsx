import React from "react";
import s from './Settings.module.css'
import Button from "../Button/Button";
import SettingsDisplay from "./SettingsDisplay/SettingsDisplay";

type SettingsPropsType = {
  counterValue: number
  counterMinValue: number
  counterMaxValue: number
  changeCounterValue: () => void
  resetCounterValue: () => void
  callSettingsMenu: () => void
  callCounter: () => void
  changeCounterMinValue: (value: number) => void
  changeCounterMaxValue: (value: number) => void
}

const Settings: React.FC<SettingsPropsType> = (props) => {
  return (
    <div className={s.settings}>
      <SettingsDisplay counterValue={props.counterValue}
                       counterMinValue={props.counterMinValue}
                       counterMaxValue={props.counterMaxValue}
                       changeCounterMinValue = {props.changeCounterMinValue}
                       changeCounterMaxValue = {props.changeCounterMaxValue}
      />
      <Button buttonTitleValue={'set'}
              counterValue={props.counterValue}
              counterMinValue={props.counterMinValue}
              counterMaxValue={props.counterMaxValue}
              className={s.btn}
              onClick={() => {
                props.callCounter();
              }}/>
    </div>
  )
}

export default Settings;