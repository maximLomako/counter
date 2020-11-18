import React from "react";
import Display from "../Display/Display";
import s from './Counter.module.css'
import ButtonBlock from "../ButtonBlock/ButtonBlock";

type CounterPropsType = {
  counterValue: number
  counterMinValue: number
  counterMaxValue: number
  changeCounterValue: () => void
  resetCounterValue: () => void
  callSettingsMenu: () => void
}

const Counter: React.FC<CounterPropsType> = (props) => {

  return (
    <div className={s.counter}>
      <Display counterValue={props.counterValue}
               counterMaxValue={props.counterMaxValue}
      />
      <ButtonBlock
        counterValue={props.counterValue}
        counterMinValue={props.counterMinValue}
        counterMaxValue={props.counterMaxValue}
        changeCounterValue={props.changeCounterValue}
        resetCounterValue={props.resetCounterValue}
        callSettingsMenu={props.callSettingsMenu}
      />
    </div>
  )
}

export default Counter;