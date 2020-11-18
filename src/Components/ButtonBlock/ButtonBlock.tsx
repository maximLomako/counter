import React from "react";
import Button from "../Button/Button";
import s from './ButtonBlock.module.css'

type ButtonBlockPropsTYpe = {
  counterValue: number
  counterMinValue: number
  counterMaxValue: number
  changeCounterValue: () => void
  resetCounterValue: () => void
  callSettingsMenu: () => void
}

const ButtonBlock: React.FC<ButtonBlockPropsTYpe> = ({
                                                       counterValue, counterMinValue,
                                                       counterMaxValue, changeCounterValue,
                                                       resetCounterValue, callSettingsMenu
                                                     }) => {
  return (
    <div className={s.buttonBlock}>
      <Button buttonTitleValue={'inc'}
              onClick={changeCounterValue}
              counterValue={counterValue}
              counterMinValue={counterMinValue}
              counterMaxValue={counterMaxValue}
              className={counterValue >= counterMaxValue ? `${s.btn} ${s.disabledBtn}` : s.btn}
      />
      <Button buttonTitleValue={'reset'}
              onClick={resetCounterValue}
              counterValue={counterValue}
              counterMinValue={counterMinValue}
              counterMaxValue={counterMaxValue}
              className={s.btn}
      />
      <Button buttonTitleValue={'set'}
              onClick={callSettingsMenu}
              counterValue={counterValue}
              counterMinValue={counterMinValue}
              counterMaxValue={counterMaxValue}
              className={s.btn}
      />
    </div>
  )
}

export default ButtonBlock;