import { ReactElement } from "react"
import "../../assets/action-btn.scss"

const ActionButton:React.FC<{ sign:string, class?:string, action:Function }> = ({...props}):ReactElement =>
    {
        const clickEvent = () => {
            props.action(props.sign)
        }
        return(
            <div className={`Calc-actionBtn ${props.class}`} onClick={()=> clickEvent()}>
                <p>{props.sign}</p>
            </div>
        )
    }
export default ActionButton