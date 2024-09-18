import { useState } from 'react';
import NumberButton from './components/number-button/numberButton';
import "./assets/app.scss";
import ActionButton from './components/action-button/actionButton';

function App() {
  const [numA, setNumA] = useState("")
  const [numB, setNumB] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")

  const clearActions = () => {
    setNumA("")
    setNumB("")
    setOperation("")
  }

  const changeNumber = (digit:string) => {
    if(result !== ""){
      setResult("")
    }
    if(operation !== ""){
      setNumB(numB + digit)
    }
    else{
      setNumA(numA + digit)
    }
  }
  const changeOperation = (sign:string) => {
    if(sign !== "="){
      if(result !== "")
      {
        setNumA(result)
        setResult("")
      }
      setOperation(sign)
    }
    else{
      switch(operation){
        case "+":
          var res = parseInt(numA) + parseInt(numB)
          console.log(res)
          setResult(res.toString());
          clearActions();
        break;

        case "−":
          res = parseInt(numA) - parseInt(numB)
          setResult(res.toString());
          clearActions();
        break;

        case "×":
          res = parseInt(numA) * parseInt(numB)
          setResult(res.toString());
          clearActions();
        break;

        case "÷":
          res = parseInt(numA) / parseInt(numB)
          setResult(res.toString());
          clearActions();
        break;
      }
    }
  }

  return (
    <div className="App">
      <div className='Calculator'>
        <div className='Calc-screen'>
          <span>{result !== "" ? result : `${numA} ${operation} ${numB}`}</span>
        </div>
        <div className='Calc-keyboard'>
          <NumberButton sign={1} action={changeNumber} />
          <NumberButton sign={2} action={changeNumber} />
          <NumberButton sign={3} action={changeNumber} />
          <ActionButton sign={"+"} action={changeOperation} />
          <NumberButton sign={4} action={changeNumber} />
          <NumberButton sign={5} action={changeNumber} />
          <NumberButton sign={6} action={changeNumber} />
          <ActionButton sign={"−"} action={changeOperation} />
          <NumberButton sign={7} action={changeNumber} />
          <NumberButton sign={8} action={changeNumber} />
          <NumberButton sign={9} action={changeNumber} />
          <ActionButton sign={"×"} action={changeOperation} />
          <NumberButton sign={0} class={"wider-btn"} action={changeNumber} />
          <NumberButton sign={'.'} action={changeNumber} />
          <ActionButton sign={"÷"} action={changeOperation} />
          <ActionButton sign={"="} class={'confirm-btn'} action={changeOperation} />
        </div>
      </div>
    </div>
  );
}

export default App;
