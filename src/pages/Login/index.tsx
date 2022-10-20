import React from "react"
import { useNavigate } from "react-router-dom"

import { PinkButton } from "../../assets/customStyle"

export default function Login() {
    const navigate = useNavigate()
    const toReigster = () => {
        navigate("/Register")
    }
    return (
        <>
            <div>登录页</div>
            <PinkButton onClick={toReigster}>跳转注册页面</PinkButton>
        </>
    )
}
