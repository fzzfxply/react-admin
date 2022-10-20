import React, { forwardRef, LegacyRef, Ref, RefObject, useImperativeHandle, useRef } from "react"

function FancyInput<T extends LegacyRef<T>>(props: Record<string, unknown>, ref: React.Ref<unknown> | undefined) {
    const inputRef = useRef() as RefObject<HTMLInputElement>
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log(inputRef)
            inputRef.current?.focus()
        },
        fun: () => {
            console.log(inputRef)
            console.log("子组件的方法")
        },
    }))
    return <input ref={inputRef} />
}

export default forwardRef(FancyInput)
