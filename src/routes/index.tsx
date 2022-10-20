import React, { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../components"
import { FIXEDROUTES, RouterType, ROUTES } from "../rounterCofig"
import lazyLoad from "../utils/lazyLoad"

const RequireAuth = ({ children }: any) => {
    console.log("路由拦截组件",children)
    const authed  =  true
    // 判断 localstorage 中登录状态是否为 true
    console.log(1)
    return authed  ? (
        children
    ) : (
        <Navigate to="/Login" replace /> // 跳转到登录
    )
}

const runderRouter = (ROUTES: RouterType[]) => {
    return ROUTES.map((item, index: number) => {
        return <Route key={item.title + index} path={item.path} element={<RequireAuth>{lazyLoad(item.element)}</RequireAuth>} />
    })
}

export default function RouterTest() {
    return (
        <Routes>
            {runderRouter(FIXEDROUTES)}
            <Route path="/*" element={<Home />}>
                {runderRouter(ROUTES)}
                <Route index element={<Navigate to="Hotrecommended" />} />
            </Route>
        </Routes>
    )
}
