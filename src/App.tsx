import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Dispaly";
import {Button} from "./Button";

function App() {
  const [state, setState] = useState<number>(0);
  return (
    <div className="App">
      <Display value={state}/>
      <div className="buttonBlock">
        <Button
                className={state>=5 ? 'btn btnDisabled' : 'btn'}
          title='inc'
                onClick={() => {
                  setState(state + 1)
                }}/>

        <Button className='btn'
          title='reset'
                onClick={() => {
                  setState(0)
                }}/>
      </div>
    </div>
  );
}

export default App;
