import React from "react"
import { RouteObject } from "react-router-dom"

import Commodity from "./pages/Commodity"
import Hotrecommended from "./pages/Hotrecommended"
import HotrecommendedChild from "./pages/HotrecommendedChild"
import Jointventure from "./pages/Jointventure"
import Login from "./pages/Login"
import MuiPage from "./pages/MuiPage"
import Newarrival from "./pages/Newarrival"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import SearchLayoutPage from "./pages/SearchLayoutPage"
export interface RouterType extends RouteObject {
    title: string
    isNot?: boolean
}
export const ROUTES: RouterType[] = [
    {
        title: "leftMenu.hot_recommended",
        path: "Hotrecommended/*",
        element: <Hotrecommended />,
        children: [],
    },
    {
        title: "leftMenu.new_arrival",
        path: "new_arrival",
        element: <Newarrival />,
    },
    {
        title: "leftMenu.joint_venture",
        path: "joint_venture",
        element: <Jointventure />,
    },
    {
        title: "leftMenu.commodity",
        path: "commodity",
        element: <Commodity />,
    },
    {
        title: "leftMenu.searchLayout",
        path: "SearchLayoutPage",
        element: <SearchLayoutPage />,
    },
    {
        title: "leftMenu.MuiPage",
        path: "MuiPage",
        element: <MuiPage />,
    },
    {
        title: "leftMenu.child",
        path: "HotrecommendedChild",
        isNot: true,
        element: <HotrecommendedChild />,
    },
]
export const FIXEDROUTES: RouterType[] = [
    {
        title: "leftMenu.login",
        path: "Login",
        element: <Login />,
    },
    {
        title: "leftMenu.register",
        path: "Register",
        element: <Register />,
    },
    {
        title: "leftMenu.NotFound",
        path: "*",
        element: <NotFound />,
    },
]
