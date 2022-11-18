import {
    FormControl,
    Grid,
    IconButton,
    styled,
} from "@mui/material"
import { read } from "fs"
import React, { useState } from "react"

import UPLOAD from "../../icon/upload.svg"

const Input = styled("input")({
    display: "none",

})
type RelatedEvidence = {
    statusId: number
    file?: File
    url?: string
}
export default function Register() {
    const [readFile,setReadFile]=useState<any>([])
    const     chargebackUpdateStatus = ""

    const evidenceImg = () => {
        return readFile.name
    }
    const setRelatedEvidence = (file: File | undefined) => {

        setReadFile(file)
    }

    return (
        <>

            {evidenceImg()}
            <Grid item xs={4} pl={0}>
                <label htmlFor="icon-button-file">
                    <Input
                        id="icon-button-file"
                        type="file"
                        onChange={(e) => {
                            let reader: HTMLImageElement | FileReader

                            if (e.target.files) {
                                if (e.target.files[0].type.includes("image/")) {

                                    reader = new Image()
                                    reader.src = window.URL.createObjectURL(e.target.files[0])
                                    console.log(reader)
                                } else {
                                    console.log(2)
                                    reader = new FileReader()
                                    reader.readAsDataURL(e.target.files[0])
                                }
                                reader.onload = () => {
                                    console.log(e.target.files,reader)
                                    setRelatedEvidence(e.target.files?.[0])
                                }

                                reader.onerror = () => {
                                    // e.target.files && store.checkFile(e.target.files[0])
                                    // window.dispatchEvent(new CustomEvent("IMAGE_ERROR"))
                                }
                            }
                        }}
                    />

                    {
                        (
                            <IconButton aria-label="upload picture" component="span" sx={{ padding: 0 }}>
                                <img src={UPLOAD} alt="upload" />
                            </IconButton>
                        )
                    }

                </label>
            </Grid>

        </>
    )
}
