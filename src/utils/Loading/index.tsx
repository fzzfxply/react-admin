import React from "react"

import LOADING from "./OMNI_Loading.gif"

export type LoadingProps = {
    width?: number
}

function Loading({ width = 120 }: LoadingProps) {
    return <img src={LOADING} alt="loading" width={width} />
}

export default Loading
