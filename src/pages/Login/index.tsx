import React from "react"
import { useNavigate } from "react-router-dom"

import { PinkButton } from "../../assets/customStyle"

export default function Login() {
    const navigate = useNavigate()
    const toReigster = () => {
        navigate("/Register")
    }
    const toHome = () => {
        navigate("/HotrecommendedChild", { replace: true })
    }
    return (
        <>
            <div>登录页</div>
            <div>
                <PinkButton onClick={toReigster}>跳转注册页面</PinkButton>
            </div>
            <div>
                {" "}
                <PinkButton onClick={toHome}>跳转至首页</PinkButton>
            </div>
        </>
    )
}
