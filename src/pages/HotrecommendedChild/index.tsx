import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { PinkButton } from "../../assets/customStyle"

export default function Index() {
    const { chargeId } = useParams()
    const [time, setTime] = useState("")
    useEffect(() => {
        console.log(chargeId)
        console.log(dayjs.locale())
    }, [])
    const handleClick = () => {
        setTime(dayjs().format("YYYY-MM-DD HH:mm:ss"))
    }
    return (
        <div style={{ padding: 20 }}>
            詳細ページ
            <p>time:{time}</p>
            <PinkButton onClick={handleClick}>dayjs测试</PinkButton>
        </div>
    )
}
