import { ReactElement } from "react"
import "../../assets/number-btn.scss"

const NumberButton:React.FC<{ sign:number | string, class?:string }> = ({...props}):ReactElement =>
{
    
    return(
        <div className={`Calc-numberBtn ${props.class}`}>
            <p>{props.sign}</p>
        </div>
    )
}
export default NumberButton