import Favorite from "@mui/icons-material/Favorite"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import MailIcon from "@mui/icons-material/Mail"
import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    Menu,
    MenuItem,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    styled,
    TextField,
    Typography,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"

import CardLayout from "../../components/cardLayout"
import StoreContext from "../../store/index"
interface newObj {
    age?: number | null
    salary?: number | string | null
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}))
const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}))
const ageList = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
const salaryList = [
    { value: 0, label: "6000~8000" },
    { value: 1, label: "8000~10000" },
    { value: 2, label: "10000~12000" },
    { value: 3, label: "12000~14000" },
    { value: 4, label: "14000~16000" },
]
const label = { inputProps: { "aria-label": "Checkbox demo" } }
const preData = {
    age: 20,
    salary: 2,
}
const settings = ["a", "b"]
export default function FormA(props: { list: string[] }) {
    const [btn1, setBtn1] = useState("")
    const [aa, setAa] = useState("")
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState<number | string>("")
    const [salary, setSalary] = useState<number | string>("")
    const [newAge, setnewAge] = useState<number | string>(preData.age)
    const [favorCheck, setFavorCheck] = useState<boolean>(true)
    const [newSalary, setnewSalary] = useState<number | string>(preData.salary)
    const [obj, setObj] = useState<newObj>({
        age: 20,
        salary: 0,
    })

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        const name = event.target.name
        const value = event.target.value
        if (name === "age") {
            setAge(value)
        } else if (name === "salary") {
            setSalary(value)
        }
    }
    const handleFavorChange = (event: any) => {
        setFavorCheck(!favorCheck)
    }
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== "backdropClick") {
            setOpen(false)
        }
    }
    const handleSubmit = () => {
        setnewAge(age)
        setnewSalary(salary)
        setOpen(false)
    }
    // React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    const handleInputBtn1 = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBtn1(event.target.value)
    }
    const handleSave = () => {
        console.log("点击了" + btn1)
    }
    useEffect(() => {
        // console.log(age)
    }, [age, salary])

    // 添加评论区域
    const [currentCommend, setCurrentCommend] = React.useState<string>("Hello World")
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
    const { CommendStore: store } = useContext(StoreContext)
    const [selectedCommend, setSelectedCommend] = React.useState<string>()
    const handleSend = () => {
        console.log("发送" + currentCommend)
        setCurrentCommend("")
        store.setNum(currentCommend)
        setSelectedCommend(store.commendList[store.commendList.length - 1])
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(null)
    }
    const handleClickUserMenu = (setting: string, index: number, event: React.MouseEvent<HTMLElement>) => {
        // console.log(setting, "===", index, "===", event)
        setSelectedCommend(setting)
        setAnchorElUser(null)
    }
    const inputCurrentCommend = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value, "event.target.value")

        setCurrentCommend(event.target.value)
    }
    return (
        <>
            <Box sx={{ width: 1 }}>
                <CardLayout cardHeader="标题hhhh11111">
                    <Box gridColumn="span 8" slot="cardContent">
                        <Item>
                            xs=8{props.list[0]}-----{btn1}
                        </Item>
                    </Box>
                </CardLayout>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} p={3}>
                    {props.list.map((item, index) => (
                        <Box key={index} gridColumn={index === 0 || index === 3 ? "span 8" : "span 4"}>
                            <Item>{index === 0 || index === 3 ? "xs=8" : "xs=4" + item}</Item>
                        </Box>
                    ))}
                </Box>
                <Box component="form" sx={{ border: 1, borderRadius: 2, p: 3 }} noValidate autoComplete="off">
                    <Grid container spacing={2} mb={2}>
                        <Grid item xs={6}>
                            <Item>栅格1</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>栅格2</Item>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField value={btn1} id="outlined-basic" label="Outlined" variant="outlined" onChange={handleInputBtn1} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="filled-basic" label="Filled" variant="filled" onChange={(event) => setAa(event.target.value)} />
                        </Grid>
                    </Grid>
                    <TextField fullWidth id="standard-basic" label="fullWidth" variant="standard" />
                    <Grid mt={3}>
                        <Button variant="contained" color="success" onClick={handleSave}>
                            保存
                        </Button>
                    </Grid>
                </Box>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <Grid container>
                    <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        checked={favorCheck}
                        // value={favorCheck}
                        onChange={handleFavorChange}
                    />
                </Grid>
                <Grid container>
                    <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
                        <Grid item xs={12} textAlign="center">
                            <FormControlLabel value="top" disabled={!favorCheck} control={<Radio />} label="Top" labelPlacement="top" />
                        </Grid>
                        <Grid item xs={6} textAlign="right" pr={4}>
                            <FormControlLabel value="start" disabled={!favorCheck} control={<Radio />} label="Start" labelPlacement="start" />
                        </Grid>
                        <Grid item xs={6} textAlign="left" pl={4}>
                            <FormControlLabel value="end" disabled={!favorCheck} control={<Radio />} label="End" />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <FormControlLabel value="bottom" disabled={!favorCheck} control={<Radio />} label="Bottom" labelPlacement="bottom" />
                        </Grid>
                    </RadioGroup>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Div>{"年龄" + newAge}</Div>
                            </Grid>
                            <Grid item xs={4}>
                                <Div>{"薪资" + salaryList.filter((el) => el.value == newSalary)[0].label}</Div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Button onClick={handleClickOpen} variant="contained" color="success">
                            选择
                        </Button>
                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>选择年龄与薪资</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel htmlFor="demo-dialog-native">年龄</InputLabel>
                                        <Select
                                            native
                                            name="age"
                                            value={age}
                                            onChange={handleChange}
                                            input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                                        >
                                            {["", ...ageList].map((item, index) => (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-dialog-select-label">薪资</InputLabel>
                                        <Select name="salary" value={salary} onChange={handleChange} input={<OutlinedInput label="salary" />}>
                                            {salaryList.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>取消</Button>
                                <Button onClick={handleSubmit}>确定</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
                <Grid container p={3}>
                    <Grid item xs={4} display="flex" alignItems="center">
                        <Grid container p={3}>
                            <Grid item xs={8}>
                                <TextField required value={currentCommend} onChange={inputCurrentCommend} id="outlined-required" label="Required" />
                            </Grid>
                            <Grid item xs={4} display="flex" alignItems="center">
                                <Button variant="contained" disabled={currentCommend.length === 0} color="success" onClick={handleSend}>
                                    发送
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} display="flex" alignItems="center">
                        <Grid container>
                            <Grid item xs={2} display="flex" alignItems="center">
                                <Badge badgeContent={store.num} color="secondary" onClick={handleOpenUserMenu}>
                                    <MailIcon color="action" />
                                </Badge>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>当前评论：{selectedCommend}</Typography>
                            </Grid>
                        </Grid>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {store.commendList.map((com, index) => (
                                <MenuItem key={index} onClick={(event) => handleClickUserMenu(com, index, event)}>
                                    <Typography textAlign="center">{com}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
