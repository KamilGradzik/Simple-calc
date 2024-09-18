import { Dispatch, ReactElement } from "react"
import "../../assets/number-btn.scss"


const NumberButton:React.FC<{ sign:number | string, class?:string, action:Dispatch<string> }> = ({...props}):ReactElement =>
{
    const clickEvent = () => {
        props.action(props.sign.toString())
    }

    return(
        <div className={`Calc-numberBtn ${props.class}`} onClick={() => clickEvent()}>
            <p>{props.sign}</p>
        </div>
    )
}
export default NumberButton