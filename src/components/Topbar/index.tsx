import MenuIcon from "@mui/icons-material/Menu"
import { Box, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import { styled } from "@mui/material/styles"
import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

import StoreContext from "../../store/index"

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}
const drawerWidth = 240
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
    const { MenuisOpenStore: store } = useContext(StoreContext)
    const { t, i18n } = useTranslation()
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
                    <Typography variant="h6" noWrap component="div">
                        <Box onClick={lngChangeEvent}>
                            {/* 语言切换 */}
                            {t("header.switchlanguage")}
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default observer(Index)
