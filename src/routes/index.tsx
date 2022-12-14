import i18n from "i18next"
import React, { useContext, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../components"
import { FIXEDROUTES, RouterType, ROUTES } from "../rounterCofig"
import StoreContext from "../store"
import lazyLoad from "../utils/lazyLoad"

function RouterTest() {
    const { MenuisOpenStore: store } = useContext(StoreContext)
    useEffect(() => {
        i18n.changeLanguage(store.isLngChange)
    }, [])
    const runderRouter = (ROUTES: RouterType[]) => {
        return ROUTES.map((item, index: number) => {
            return <Route key={item.title + index} path={item.path}   element={lazyLoad(item.element)} />
        })
    }
    const RequireAuth = ({ children }: any) => {
        console.log(1)
        const authed = store.authed
        // 判断 localstorage 中登录状态是否为 true
        return authed ? children : <Navigate to="/Login" replace />
    }
    return (
        <>
            <Routes>
                {runderRouter(FIXEDROUTES)}

                <Route path="/*" element={<RequireAuth>
                    <Home />
                </RequireAuth>}>
                    {runderRouter(ROUTES)}
                    <Route index element={<Navigate to="Hotrecommended" />} />
                </Route>
            </Routes>

        </>

    )
}
export default RouterTest
