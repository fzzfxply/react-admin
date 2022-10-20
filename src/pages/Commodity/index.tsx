import React, { memo, useCallback, useState } from "react"

function PageA (props:any) {
    const { onClick, name } = props
    console.log(111)
    return <div onClick={onClick}>{name} </div>
}

function  PageB ({ onClick, name }:any) {
    console.log(222)
    return <div onClick={onClick}>{name}</div>
}
const PageC = memo(PageA)
const PageD = memo(PageB)
function ADD() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const handleClick1 =useCallback(()=>{
        setA(a + 1)
    },[a])

    const handleClick2 =useCallback(()=>{
        setB(b + 1)
    },[b])
    return (
        <>
            <PageC onClick={handleClick1} name={a}/>
            <PageD onClick={handleClick2} name={b} />
        </>
    )
}

export default ADD