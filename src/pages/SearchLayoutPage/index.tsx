import Box from "@mui/material/Box"
import React from "react"

import CardLayout from "../../components/cardLayout"
import PaginationLayout from "../../components/paginationLayout"
import SearchLayout from "../../components/searchLayout"

export default function SearchLayoutPage() {
    const pageTitle = "封装页面布局页面头部"
    const cardTopHeader = "我是卡片头部"
    return (
        <>
            <SearchLayout pageTitle={pageTitle}>
                <Box slot="renderTop">
                    <CardLayout cardHeader={cardTopHeader}>
                        <Box slot="cardContent">
                            <div>我是form</div>
                            <div>我是form</div>
                            <div>我是form</div>
                        </Box>
                    </CardLayout>
                </Box>
                <div slot="renderCenter">
                    <CardLayout cardHeader={cardTopHeader} cardContentDefaultHeight>
                        <Box slot="cardContent">
                            <div>我是表格</div>
                            <div>我是表格</div>
                            <div>我是表格</div>
                            <div>我是表格</div>
                            <div>我是表格</div>
                        </Box>
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
