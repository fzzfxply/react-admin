import React, { MutableRefObject, Ref } from "react"

export interface useRefType extends HTMLOrSVGElement {
    fun(options?: FocusOptions): void
}

export interface clientHeightType extends MutableRefObject<Ref<null>> {
    clientHeight: number
}

export interface propsType {
    children?: React.ReactNode
}

export interface searchLayoutType extends propsType {
    pageTitle: string
    props?:string
}