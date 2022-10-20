import { MutableRefObject, Ref, RefObject } from "react"

export interface useRefType extends HTMLOrSVGElement {
    fun(options?: FocusOptions): void
}

export interface clientHeightType extends  MutableRefObject<Ref<null>> {
    clientHeight:number
}