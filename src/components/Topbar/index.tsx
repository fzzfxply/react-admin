import avatarImg from "../../assets/avatar.jpg"
import MenuIcon from "@mui/icons-material/Menu"
import { Avatar, Box, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles"
import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

import StoreContext from "../../store/index"

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}
const drawerWidth = 240
let settings = []
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))
// 页面
function Index() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(null)
    }
    const navigate = useNavigate()
    const handleClickUserMenu = (setting:string, index: number, event: React.MouseEvent<HTMLElement>) => {
        console.log(setting,"===",index,"===",event)
        if(index === 0){
            navigate("/commodity")
        }
        setAnchorElUser(null)
    }
    const { MenuisOpenStore: store } = useContext(StoreContext)
    const { t, i18n } = useTranslation()
    settings = [t("header.center"),t("header.signout")]
    const handleDrawerOpen = () => {
        store.setopen(true)
    }
    const lngChangeEvent = () => {
        store.setLngChange(i18n.language)

        i18n.changeLanguage(store.isLngChange)
    }
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={store.isopen}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(store.isopen && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"100%"}} className="top_typo" variant="h6" noWrap component="div">
                        <Box onClick={lngChangeEvent}>
                            {/* 语言切换 */}
                            {t("header.switchlanguage")}
                        </Box>
                        <Box>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={avatarImg} />
                            </IconButton>
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
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, index) => (
                                    <MenuItem key={setting} onClick={(event)=>handleClickUserMenu(setting,index,event)}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default observer(Index)
