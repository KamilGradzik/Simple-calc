import React from 'react';
import NumberButton from './components/number-button/numberButton';
import "./assets/app.scss";
import ActionButton from './components/action-button/actionButton';

function App() {
  return (
    <div className="App">
      <div className='Calculator'>
        <div className='Calc-screen'></div>
        <div className='Calc-keyboard'>
          <NumberButton sign={1}/>
          <NumberButton sign={2}/>
          <NumberButton sign={3}/>
          <ActionButton sign={"+"}/>
          <NumberButton sign={4}/>
          <NumberButton sign={5}/>
          <NumberButton sign={6}/>
          <ActionButton sign={"−"}/>
          <NumberButton sign={7}/>
          <NumberButton sign={8}/>
          <NumberButton sign={9}/>
          <ActionButton sign={"×"} />
          <NumberButton sign={0} class={"wider-btn"}/>
          <NumberButton sign={'.'}/>
          <ActionButton sign={"÷"}/>
          <ActionButton sign={"="} class={'confirm-btn'} />
        </div>
      </div>
    </div>
  );
}

export default App;
