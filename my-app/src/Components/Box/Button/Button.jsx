import s from "./Button.module.css"
console.log(s)
export const Button = ({typeBtn}) => {
    return (
        <div>
            <button className={s[typeBtn]}>Hello button</button>
        </div>
        
    )
} 