import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import styledC from "styled-components"

export const PinkButton = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
})

export const BlueButton = styledC.button`
min-width: 64px;
background:blue;
color: white;
font-size: 14px;
margin: 8px;
padding: 8px;
border:none;
border-radius: 3px;
`
