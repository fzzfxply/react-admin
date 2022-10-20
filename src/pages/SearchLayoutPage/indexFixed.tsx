import Box from "@mui/material/Box"
import React, { useLayoutEffect, useRef, useState } from "react"

import CardLayout from "../../components/cardLayout"
import PaginationLayout from "../../components/paginationLayout"
import SearchLayout from "../../components/searchLayout"
import { clientHeightType } from "../../type"

export default function SearchLayoutPage() {
    const pageTitle = "封装页面布局页面头部"
    const cardTopHeader = "我是卡片头部"
    const topRef = useRef<clientHeightType>(null)
    const [height, setHeight] = useState<undefined | number>(0)
    const [tableHeight, setTableHeight] = useState<undefined | number>(0)
    useLayoutEffect(() => {
        setHeight(topRef.current?.clientHeight)
        const num = window.screen.height - (height as number) - 410
        setTableHeight(num)
    }, [topRef.current])
    return (
        <>
            <SearchLayout pageTitle={pageTitle}>
                <Box slot="renderTop" className={"dataForm"} ref={topRef}>
                    <CardLayout cardHeader={cardTopHeader}>
                        <Box slot="cardContent">
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                        </Box>
                    </CardLayout>
                </Box>
                <div slot="renderCenter">
                    <CardLayout cardHeader={cardTopHeader}>
                        <Box slot="cardContent" minHeight={tableHeight}>我是表格</Box>
                    </CardLayout>
                </div>
                <div slot="renderFooter">
                    <div>
                        <PaginationLayout count={10} color="primary" variant="outlined"></PaginationLayout>
                    </div>
                </div>
            </SearchLayout>
        </>
    )
}
