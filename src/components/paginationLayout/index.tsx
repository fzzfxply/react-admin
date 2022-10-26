import { TablePagination } from "@mui/material"
import React, { forwardRef, LegacyRef } from "react"
function Index<T extends LegacyRef<T>>(props: any, ref: React.Ref<unknown> | undefined) {
    return (
        <div>
            <TablePagination {...props} />
        </div>
    )
}
export default forwardRef(Index)
