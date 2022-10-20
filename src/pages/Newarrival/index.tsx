import React, { useEffect, useRef } from "react"

import { useRefType } from "../../type"
import styles from "./index.module.scss"
import FancyInput from "./test"

export default function Test() {
    const inputRef = useRef<useRefType>(null)
    const onButtonClick = () => {
        inputRef.current?.focus()
        inputRef.current?.fun()
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
        <>
            <FancyInput ref={inputRef}></FancyInput>
            <button onClick={onButtonClick}>Focus the input</button>
            <div className={styles.DownloadPanel}>
                css样式
                <div className={styles.childClass}>子样式</div>
            </div>
        </>
    )
}
