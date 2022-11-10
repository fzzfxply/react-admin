import Box from "@mui/material/Box"
import React, {useCallback} from "react"

import CardLayout from "../../components/cardLayout"
import PaginationLayout from "../../components/paginationLayout"
import SearchLayout from "../../components/searchLayout"

export default function SearchLayoutPage() {
    const pageTitle = "封装页面布局页面头部"
    const cardTopHeader = "我是卡片头部"
    const [page, setPage] = React.useState(2)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    // const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    //     setPage(newPage)
    // }

    const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage)
        console.log(pageTitle,page,222)
    }, [pageTitle])

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
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
