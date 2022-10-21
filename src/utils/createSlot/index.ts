function createSlot(slotName: string, props: { children: Array<any> }) {
    let children = props.children
    if (typeof children === "object" && !Array.isArray(children)) children = [children]
    if (children)
        for (const el of children) {
            if (el.props.slot === slotName) return el
        }
    return null
}
export default createSlot
