import { useRef } from "react"
import styles from "./input.module.css"

export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
        <div className={styles.container}>
            <label style={{padding: "10px"}} htmlFor={inputRef?.current?.id} >Vstupní</label>
            <input 
           ref={inputRef} name="number" className="txt-input" id="number" defaultValue="Napiš"/>
        </div>
        <div>
            <button style={{color: "red", backgroundColor: "pink"}} onClick={()=>{console.log(inputRef);alert(inputRef)}}>Odeslat</button>
        </div>
        </>
    )
}

export default Input