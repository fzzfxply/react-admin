import axios  from "axios"
import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { PinkButton } from "../../assets/customStyle"
import StoreContext from "../../store/index"
export default function Login() {
    const { MenuisOpenStore: store } = useContext(StoreContext)
    const navigate = useNavigate()
    const toReigster = () => {
        navigate("/Register")
    }
    const toHome = () => {
        store.setauthed(true)
        const params = new FormData()
        params.append("code", "f453c7f2-3b10-44b8-aa4d-401aa750ff29.c29a5437-9961-47e2-ae3f-55f7445b414f.18c9a0ae-4d2c-4d41-8f79-d0afe3643898")
        params.append("grant_type", "authorization_code")
        params.append("client_id", "jaccs_admin_client")
        params.append("redirect_uri", "http://localhost:3000/")
        console.log(params)

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
                <PinkButton onClick={toHome}>点击登录</PinkButton>
            </div>
        </>
    )
}
