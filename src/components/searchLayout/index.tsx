import Box from "@mui/material/Box"
import React, { forwardRef, LegacyRef, memo } from "react"

import { searchLayoutType } from "../../type"
import createSlot from "../../utils/createSlot"

function Index<T extends LegacyRef<T>>(props: searchLayoutType, ref: React.Ref<unknown> | undefined) {
    console.log("props===========", props)
    return (
        <div>
            {props.pageTitle ? <h2>{props.pageTitle}</h2> : null}
            <Box
                sx={{
                    display: "flex",
                    width: " 100%",
                    flexDirection: "column",
                }}
            >
                {createSlot("renderTop", props) ? (
                    <Box
                        sx={{
                            flex: "0 0 auto",
                        }}
                    >
                        {createSlot("renderTop", props)}
                    </Box>
                ) : null}

                {createSlot("renderCenter", props) ? (
                    <Box
                        sx={{
                            flex: "1 0 auto",
                            paddingTop: "10px",
                        }}
                    >
                        {createSlot("renderCenter", props)}
                    </Box>
                ) : null}

                {createSlot("renderFooter", props) ? (
                    <Box
                        sx={{
                            flex: "0 0 auto",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        {createSlot("renderFooter", props)}
                    </Box>
                ) : null}
            </Box>
        </div>
    )
}
export default memo(forwardRef(Index))
