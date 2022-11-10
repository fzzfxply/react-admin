import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"

import { PinkButton } from "../../assets/customStyle"
import  StoreContext  from  "../../store/index"
export default function Login() {
    const { MenuisOpenStore: store } = useContext(StoreContext)
    const navigate = useNavigate()
    const toReigster = () => {
        navigate("/Register")
    }
    const toHome = () => {
        store.setauthed(true)
        navigate("/HotrecommendedChild", { replace: true })
    }
    return (
        <>
            {JSON.stringify( store.authed)}
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
