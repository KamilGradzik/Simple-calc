import React from 'react';
import NumberButton from './components/number-button/numberButton';
import "./assets/app.scss";

function App() {
  return (
    <div className="App">
      <div className='Calculator'>
        <div className='Calc-screen'></div>
        <div className='Calc-keyboard'>
          <NumberButton number={1}/>
          <NumberButton number={2}/>
          <NumberButton number={3}/>
          <NumberButton number={4}/>
          <NumberButton number={5}/>
          <NumberButton number={6}/>
          <NumberButton number={7}/>
          <NumberButton number={8}/>
          <NumberButton number={9}/>
          <NumberButton number={0}/>
          <NumberButton number={'.'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
