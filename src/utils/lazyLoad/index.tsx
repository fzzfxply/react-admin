import { Box } from "@mui/material"
import React, { ReactNode, Suspense } from "react"

import Loading from "../Loading"

const lazyLoad = (children: ReactNode) => {
    return (
        <Suspense
            fallback={
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} position={"absolute"} top={0} right={0} left={0} bottom={0}>
                    <Loading />
                </Box>
            }
        >
            {children}
        </Suspense>
    )
}

export default lazyLoad
