import { ReactNode } from "react"

import { searchLayoutType } from "../../type"

function createSlot(slotName: string, props: searchLayoutType) {
    const children = props.children
    let newchildren: any = props?.children

    if (typeof children === "object" && !Array.isArray(children)) newchildren = [children]
    if (newchildren)
        for (const el of newchildren) {
            if (el.props?.slot === slotName) return el
        }
    return null
}
export default createSlot
