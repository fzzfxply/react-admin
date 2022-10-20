import Box from "@mui/material/Box"
import React, { forwardRef, LegacyRef} from "react"

import createSlot from "../../utils/createSlot"
function Index<T extends LegacyRef<T>>(props: any, ref: React.Ref<unknown> | undefined) {
    console.log("props===========", props)
    return (
        <div>
            {props.pageTitle ? <h2>{props.pageTitle}</h2> : null}
            <Box
                sx={{
                    display: "flex",
                    width: " 100%",
                    height: "calc(100vh - 148px)",
                    flexDirection: "column",
                }}
            >
                {createSlot("renderTop", props) ? (
                    <Box
                        sx={{
                            background: "#ff0",
                            flex: "0 0 auto",
                        }}
                    >
                        {createSlot("renderTop", props)}
                    </Box>
                ) : null}

                {createSlot("renderCenter", props) ? (
                    <Box
                        sx={{
                            background: "aquamarine",
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
                            background: "#e300ff40",
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
export default forwardRef(Index)
