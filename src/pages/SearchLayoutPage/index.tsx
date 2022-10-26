import Box from "@mui/material/Box"
import React, { useCallback, useEffect, useMemo, useState } from "react"

import CardLayout from "../../components/cardLayout"
import PaginationLayout from "../../components/paginationLayout"
import SearchLayout from "../../components/searchLayout"

export default function SearchLayoutPage() {
    const pageTitle = "封装页面布局页面头部"
    const cardTopHeader = "我是卡片头部"
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = useCallback(
        (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
            setPage(newPage)
            console.log("22222222", newPage)
        },
        [page],
    )
    // const handleChangePage =  (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    //     setPage(newPage)
    //     console.log(2222)
    // }
    useEffect(() => {
        console.log("init page")
    }, [])

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
        console.log(1111111)
    }
    const returnRendom = useMemo(() => {
        return <div>{Math.random()}</div>
    }, [])
    const returnRendom2 = () => {
        return Math.random()
    }
    return (
        <>
            <SearchLayout pageTitle={pageTitle}>
                <Box slot="renderTop">
                    <div>{returnRendom2()}</div>
                    <div>{rowsPerPage}</div>
                    <CardLayout cardHeader={cardTopHeader}>
                        <Box slot="cardContent">
                            <div>{returnRendom}</div>
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
                        <PaginationLayout
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        ></PaginationLayout>
                    </div>
                </div>
            </SearchLayout>
        </>
    )
}
