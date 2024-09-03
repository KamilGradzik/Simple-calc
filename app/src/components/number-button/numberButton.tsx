import { ReactElement } from "react"

const NumberButton:React.FC<{ number:number | string }> = ({...props}):ReactElement =>
{
    
    return(
        <div className="Calc-numberBtn">
            <p>{props.number}</p>
        </div>
    )
}
export default NumberButton