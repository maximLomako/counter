import React, {useState} from "react";
import './App.css';
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Redirect} from "react-router-dom";

function App() {

  const getDataFromLocalStorage = (arg: string) => {
    // @ts-ignore
    return localStorage.getItem(arg) === null ? 0 : +localStorage.getItem(arg);
  }

  let [counterMinValue, setMinValue] = useState(getDataFromLocalStorage('counterMinValue'));
  let [counterMaxValue, setCounterMaxValue] = useState(getDataFromLocalStorage('counterMaxValue'));
  let [counterValue, setCounterValue] = useState(counterMinValue);


  const changeCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const resetCounterValue = () => {
    setCounterValue(counterMinValue)
  }

  const callSettingsMenu = () => {
    window.location.assign('/settings/');
  }

  const callCounter = () => {
    window.location.assign('/counter/');
  }

  const changeCounterMinValue = (value: number) => {
    if (value >= 0) {
      setMinValue(value);
      localStorage.setItem('counterMinValue', value + '')
    }
  }

  const changeCounterMaxValue = (value: number) => {
    if (value >= 0) {
      setCounterMaxValue(value);
      localStorage.setItem('counterMaxValue', value + '')
    }
  }


  return (
    <BrowserRouter>
      <div className='appContainer'>
        <Route exact path="/">
          <Redirect to="/counter"/>
        </Route>
        <Route path={'/counter'} render={() => <Counter counterValue={counterValue}
                                                        counterMinValue={counterMinValue}
                                                        counterMaxValue={counterMaxValue}
                                                        changeCounterValue={changeCounterValue}
                                                        resetCounterValue={resetCounterValue}
                                                        callSettingsMenu={callSettingsMenu}
        />}/>

        <Route path={'/settings'} render={() => <Settings counterValue={counterValue}
                                                          counterMinValue={counterMinValue}
                                                          counterMaxValue={counterMaxValue}
                                                          changeCounterValue={changeCounterValue}
                                                          resetCounterValue={resetCounterValue}
                                                          callSettingsMenu={callSettingsMenu}
                                                          callCounter={callCounter}
                                                          changeCounterMinValue={changeCounterMinValue}
                                                          changeCounterMaxValue={changeCounterMaxValue}
        />}/>
      </div>
    </BrowserRouter>
  )
}


export default App;
