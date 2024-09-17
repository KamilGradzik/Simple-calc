import { ReactElement } from "react"
import "../../assets/action-btn.scss"

const ActionButton:React.FC<{ sign:string, class?:string }> = ({...props}):ReactElement =>
    {
        
        return(
            <div className={`Calc-actionBtn ${props.class}`}>
                <p>{props.sign}</p>
            </div>
        )
    }
export default ActionButton