import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";


function App() {

  let [counterValue, setCounterValue] = useState(0);
  let [counterMinValue, setMinValue] = useState(0);
  let [counterMaxValue, setCounterMaxValue] = useState(5);


  const changeCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const resetCounterValue = () => {
    setCounterValue(0)
  }

  const callSettingsMenu = () => {
    console.log(counterValue)
  }

  const changeCounterMinValue = (value: number) => {
    if (value >= 0) {
      setMinValue(value);
    }

  }

  const changeCounterMaxValue = (value: number) => {
    if (value >= 0) {
      setCounterMaxValue(value);
    }
  }




  return (
    <div className='appContainer'>
      {/*<Counter counterValue={counterValue}*/}
      {/*         counterMinValue={counterMinValue}*/}
      {/*         counterMaxValue={counterMaxValue}*/}
      {/*         changeCounterValue={changeCounterValue}*/}
      {/*         resetCounterValue={resetCounterValue}*/}
      {/*         callSettingsMenu={callSettingsMenu}*/}
      {/*/>*/}
      <Settings counterValue={counterValue}
                counterMinValue={counterMinValue}
                counterMaxValue={counterMaxValue}
                changeCounterValue={changeCounterValue}
                resetCounterValue={resetCounterValue}
                callSettingsMenu={callSettingsMenu}
                changeCounterMinValue={changeCounterMinValue}
                changeCounterMaxValue={changeCounterMaxValue}
      />
    </div>
  )
}


export default App;
