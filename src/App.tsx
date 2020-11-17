import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Settings from './Components/Settings/Settings';


function App() {
  const [counterValue, setCounterValue] = useState<number>(0);

  const changeCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const resetCounterValue = () => {
    setCounterValue(0)
  }

  return (
    <div className="App">
      {/*<Counter counterValue={counterValue}*/}
      {/*         changeCounterValue={changeCounterValue}*/}
      {/*         resetCounterValue={resetCounterValue}*/}
      {/*/>*/}
      <Settings />
    </div>
  );
}

export default App;
