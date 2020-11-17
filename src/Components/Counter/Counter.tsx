import React from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
  counterValue: number
  changeCounterValue: () => void
  resetCounterValue: () => void
}


const Counter = (props: CounterPropsType) => {
  return (
    <>
      <Display counterValue={props.counterValue}/>
      <div className={s.buttonBlock}>
        <Button
          className={props.counterValue >= 5 ? `${s.btn} ${s.btnDisabled}` : `${s.btn}`}
          title='inc'
          onClick={props.changeCounterValue}/>

        <Button className={s.btn}
                title='reset'
                onClick={props.resetCounterValue}/>

        <Button className={s.btn}
                title='set'
                onClick={() => {console.log('set')}}/>
      </div>


    </>
  )
}

export default Counter;