import React, { memo, useCallback, useState } from "react"
// react预览pdf文件插件
import PDF from "react-pdf-js"

// eslint-disable-next-line react/display-name
export default memo(() => {
    const url = "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"
    const url2 =
        "https://storage.googleapis.com/omnipf-tesx-sales-manage-form/daily_sales_bulletin/01G5GMP6PP2RZCX4GXB18SB5AQ/20220922_970000000001_CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD%EF%BC%92CB%E3%83%80%E3%83%9F%E3%83%BC%E6%96%BD%E8%A8%AD_%E5%A3%B2%E4%B8%8A%E9%80%9F%E5%A0%B1PDF%EF%BC%88%E6%98%A8%E5%B9%B4%E5%90%8C%E6%9B%9C%E6%97%A5%E5%AF%BE%E6%AF%94%EF%BC%89.pdf?GoogleAccessId=gke-sales-manage-job-tesx-1@omniplatform-tes.iam.gserviceaccount.com&Expires=1982388987&Signature=jPDOKmrjiC5MLoYJKhLZsbDaLmrAP3UDKwVNn%2BROVjGJJmFwOM69EGjFTSnSX01vRBTBec4zr8o3MjVH1X%2BPU%2BL1rIp3JqMPGN4T0g92Oaz66Auh5CQeedANBVikyBZI1SMh15BiAWDmGTVaO5SVDqD32hU4%2FyGYqzJyRSxqGoV4j%2BdXs4zhMH7x8qT1w8cj5Vl%2BRKXXvmaqkw2lKC4xrQ9y%2F0cNXBgOrCVqlLhJhR4qeC%2B6paHPAUA3NyH87l0XS9jdCy0pE4GD0%2BxNAJuL0xGd5MV2f0GkmWoGkTTl2xY9PZP0Hwx2gzXFaQy9TRB2e5yJXqhRomvoKo7spKjo5g%3D%3D"

    const [pages, setPages] = useState({ page: 1, allPages: 1 })

    const getAllPages = useCallback(
        (pageNums: number) => {
            setPages((prev) => ({ ...prev, allPages: pageNums }))
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [pages],
    )

    const nextPage = useCallback(
        (type: string) => {
            const currentPage = pages["page"]
            if (type == "next") {
                // 如果是下一页
                if (currentPage == pages["allPages"]) {
                    console.log("已经是最后一页了")
                } else {
                    setPages((prev) => ({ ...prev, page: currentPage + 1 }))
                }
            } else {
                // 如果是上一页
                if (currentPage == 1) {
                    console.log("已经是第一页了")
                } else {
                    setPages((prev) => ({ ...prev, page: currentPage - 1 }))
                }
            }
        },
        [pages],
    )

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <p>
                <button onClick={() => nextPage("up")}>上一页</button>
                <span>
                    {pages["page"]}/{pages["allPages"]}页
                </span>
                <button onClick={() => nextPage("next")}>下一页</button>
            </p>
            <PDF
                file={url} // 文件地址
                onDocumentComplete={getAllPages}
                page={pages["page"]} // 文件页码
            />
            {/* ifrme方式 暂时看可以 */}
            {/* <iframe src={url2} frameBorder={0} style={{width:"50%", height: "100%"}}></iframe> */}
        </div>
    )
})
