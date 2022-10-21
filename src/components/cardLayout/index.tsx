import { Box, Card, CardActions, CardContent, CardHeader } from "@mui/material"
import React, { forwardRef, LegacyRef } from "react"

import { cardLayoutType } from "../../type"
import createSlot from "../../utils/createSlot"

function Index<T extends LegacyRef<T>>(props: cardLayoutType, ref: React.Ref<unknown> | undefined) {
    console.log(props)
    return (
        <div>
            <Card>
                {props.cardHeader ? <CardHeader title={props.cardHeader} /> : null}
                {createSlot("cardContent", props) ? (
                    <CardContent>
                        <Box {...props} minHeight={props.cardContentDefaultHeight ? 400 : props.minHeight}>
                            {createSlot("cardContent", props)}
                        </Box>
                    </CardContent>
                ) : null}
                {createSlot("CardActions", props) ? <CardActions>{createSlot("CardActions", props)}</CardActions> : null}
            </Card>
        </div>
    )
}
export default forwardRef(Index)
