import React from "react";
import Option from "./Option/Option";
import s from './Settings.module.css'
import {Button} from "../Button/Button";

const Settings = () => {
  return(<>
    <div className={s.optionBlock}>
      <Option />
      <Option />
    </div>
    <div className={s.buttonBlock}>
      <Button className={s.btn} title='set' onClick={() => {console.log(1)}} />
    </div>

  </>)
}

export default Settings;