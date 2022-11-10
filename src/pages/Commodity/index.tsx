import React from "react"

export default function Register() {
    const url = "https://storage.googleapis.com/omnipf-tesx-sales-manage-form/daily_sales_bulletin/01G5GMP6PP2RZCX4GXB18SB5AQ/20220922_970000000001_CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD_%E5%A3%B2%E4%B8%8A%E9%80%9F%E5%A0%B1PDF%EF%BC%88%E6%98%A8%E5%B9%B4%E5%90%8C%E6%9B%9C%E6%97%A5%E5%AF%BE%E6%AF%94%EF%BC%89.pdf?GoogleAccessId=gke-sales-manage-job-tesx-1@omniplatform-tes.iam.gserviceaccount.com&Expires=1982388987&Signature=jPDOKmrjiC5MLoYJKhLZsbDaLmrAP3UDKwVNn%2BROVjGJJmFwOM69EGjFTSnSX01vRBTBec4zr8o3MjVH1X%2BPU%2BL1rIp3JqMPGN4T0g92Oaz66Auh5CQeedANBVikyBZI1SMh15BiAWDmGTVaO5SVDqD32hU4%2FyGYqzJyRSxqGoV4j%2BdXs4zhMH7x8qT1w8cj5Vl%2BRKXXvmaqkw2lKC4xrQ9y%2F0cNXBgOrCVqlLhJhR4qeC%2B6paHPAUA3NyH87l0XS9jdCy0pE4GD0%2BxNAJuL0xGd5MV2f0GkmWoGkTTl2xY9PZP0Hwx2gzXFaQy9TRB2e5yJXqhRomvoKo7spKjo5g%3D%3D"
    const dlpdf = ()=>{
        // const IFRAME = document.createElement("iframe")
        // IFRAME.style.display = "none"
        // IFRAME.style.height = "0"
        // // src 就是请求服务地址自行修改。
        // IFRAME.src = url
        // document.body.appendChild(IFRAME)
        // setTimeout(() => {
        //     IFRAME.remove()
        // }, 60 * 1000)

        const blob = new Blob([url])

        // const objectUrl = URL.createObjectURL(blob)
        console.log(blob)
        // const link = document.createElement("a")
        // link.download = "我的pdf文件.pdf"
        // link.href = objectUrl
        // link.click()
        // link.remove()
    }

    return <>注册页
        <button onClick={dlpdf}>下载pdf</button>
    </>
}
