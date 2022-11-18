import ClearIcon from "@mui/icons-material/Clear"
import { Box, FormControl, FormHelperText, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import React from "react"

export type CustomerFormInputProps = {
    label: string
    value: string
    onChange: (value: string) => void
    error: boolean
    maxLength: number
    message?: string
    disabled?: boolean
}

function ItemInput(props: CustomerFormInputProps) {
    return (
        <Box display={"flex"}>
            <Typography component={"label"} flexShrink={0} height={40} lineHeight={"40px"} htmlFor={props.label} mr={1} display={"block"}>
                {props.label}
            </Typography>
            <FormControl fullWidth>
                <OutlinedInput
                    id={props.label}
                    autoComplete={"off"}
                    sx={{ paddingRight: 0, background: props.disabled ? "rgba(0, 0, 0, 0.12)" : "" }}
                    disabled={props.disabled}
                    size={"small"}
                    inputProps={{ maxLength: props.maxLength }}
                    error={props.error}
                    endAdornment={
                        props.value && (
                            <InputAdornment position="start" onClick={() => props.onChange("")}>
                                <ClearIcon />
                            </InputAdornment>
                        )
                    }
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <FormHelperText error={props.error}>{props.message || " "}</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default ItemInput
