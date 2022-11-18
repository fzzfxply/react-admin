import axios, { AxiosRequestConfig} from "axios"
export const getToken = () => localStorage.getItem("TOKEN_KEY")
import { useNavigate } from "react-router-dom"

/**
 * 如果有多个请求都是 403 就需要这个开关 来控制message的展示个数
 * 展示一个之后  关闭阀门
 */

// 第一步，创建实例
const service = axios.create({
    baseURL: "api",
    timeout: 5000
})

// 第二步，请求拦截
service.interceptors.request.use(
    function (config: AxiosRequestConfig ) {
        // 请求发生前处理
        if (getToken()) {
            config.headers&&  (config.headers!.Authorization = `Bearer ${getToken()}`)
        }

        return config
    }, function (error) {
        // 请求错误处理
        return Promise.reject(error)
    }
)

// 第三步，响应阻拦
service.interceptors.response.use(
    function (response) {
        // 响应数据处理

        return response.data
    },
    function (error) {
        const navigate = useNavigate()

        // 响应错误处理
        if (error.request.status == 404) {
            navigate("/Login")
        }

        return Promise.reject(error)
    }
)

export default service