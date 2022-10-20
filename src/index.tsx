import "./i18n/config" // 引用配置文件
import "dayjs/locale/ja" // 导入本地化语言
import "./assets/style.scss" // 修改全局样式

import { ThemeProvider } from "@mui/material"
import dayjs from "dayjs"
import localeData from "dayjs/plugin/localeData"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
dayjs.extend(localeData)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.locale("ja")
// console.log("本地时间", dayjs("2022-10-17 17:00").locale("ja").format("YYYY-MM-DD HH:mm:ss"))
// console.log("本地时间", dayjs(dayjs.locale()).localeData().longDateFormat)
import App from "./routes/index"
import { customTheme } from "./thems"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <BrowserRouter>
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
