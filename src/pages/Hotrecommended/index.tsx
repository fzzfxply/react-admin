import Button from "@mui/material/Button"
import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import useDebounce from "../../utils/debounce"
import HotrecommendedChild from "../HotrecommendedChild"

const HotrecommendedIndex = function Index() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const navigate = useNavigate()
    const handleClick = useDebounce(function () {
        setCounter1(counter1 + 1)
    }, 1000)
    const handleroutePage1 = () => {
        navigate("/HotrecommendedChild")
    }
    const handleroutePage2 = () => {
        navigate("/Hotrecommended/33333")
    }
    // 补充一个函数，加载后会自动更新counter2的数值
    useEffect(function () {
        const t = setInterval(() => {
            setCounter2((x) => x + 1)
        }, 500)
        return () => clearInterval(t)
    }, [])
    return (
        <div style={{ padding: 30 }}>
            <div
                onClick={function () {
                    handleClick()
                }}
            >
                click
            </div>
            <div>{counter1}</div>
            <div>{counter2}</div>
            <Button variant="contained" onClick={() => handleroutePage1()}>
                跳转详情页-路由一级配置方式
            </Button>
            <Button variant="contained" color="success" onClick={() => handleroutePage2()}>
                跳转详情页-当前页面路由方式
            </Button>
        </div>
    )
}
const HotrecommendedRoutes = () => (
    <Routes>
        <Route index element={<HotrecommendedIndex />} />
        <Route path={":chargeId"} element={<HotrecommendedChild />} />
    </Routes>
)

export default HotrecommendedRoutes
