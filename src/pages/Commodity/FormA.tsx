import React from "react"
import { Box, Button, TextField, Paper, styled, Grid } from "@mui/material"
import CardLayout from "../../components/cardLayout"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}))
export default function FormA(props:{list:string[]}){
    const [btn1, inputBtn1] = React.useState("")
    // React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    const handleInputBtn1 = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        inputBtn1(event.target.value)
        console.log(btn1)
    }
    const handleSave = () => {
        console.log("点击了"+btn1)
    }
    return <>
        <Box sx={{width: 1}}>
            <CardLayout cardHeader="标题hhhh">
                <Box gridColumn="span 8">
                    <Item>xs=8{props.list[0]}</Item>
                </Box>
            </CardLayout>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} p={3}>
                {props.list.map((item,index)=>(
                    <Box key={index} gridColumn={(index===0||index===3)?"span 8":"span 4"}>
                        <Item>{(index===0||index===3)?"xs=8":"xs=4"+item}</Item>
                    </Box>
                ))}
                <Box
                    component="form"
                    sx={{ width: "100ch", border:1, borderRadius: 2, p:3 }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid item xs={6}>栅格1</Grid>
                    <Grid item xs={6}>栅格2</Grid>
                    <TextField value={btn1} id="outlined-basic" label="Outlined" variant="outlined" onChange={handleInputBtn1} />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField fullWidth id="standard-basic" label="fullWidth" variant="standard" />
                    <Button variant="contained" color="success" onClick={handleSave}>保存</Button>
                </Box>
            </Box>
        </Box>
    </>
}

// export default FormA