import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import MailIcon from "@mui/icons-material/Mail"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import { CssBaseline, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Box from "@mui/material/Box"
import MuiDrawer from "@mui/material/Drawer"
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles"
import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

import { RouterType, ROUTES } from "../../rounterCofig"
import StoreContext from "../../store/index"
const drawerWidth = 240
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
})

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}))

function MiniDrawer() {
    const navigate = useNavigate()
    const location = useLocation()
    const theme = useTheme()
    const { MenuisOpenStore: store } = useContext(StoreContext)
    const handleDrawerClose = () => {
        store.setopen(false)
    }
    const { t } = useTranslation()
    const handleroutePage = (item: RouterType) => {
        if (item.path?.includes("*")) {
            const tempPath = getTempPath(item.path)
            navigate(`${tempPath}`)
            return
        }
        navigate(`${item.path}`)
    }
    const setPathEvent = (path: string) => {
        return path?.includes("*") ? getTempPath(path) : path
    }
    const getTempPath = (path: string) => {
        return path.slice(0, path.length - 2)
    }
    useEffect(() => {
        if (store.isHydrated) {
            console.log("store里缓存的值" + store.isopen)
        }
    }, [store.isHydrated,store.isopen])
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Drawer variant="permanent" open={store.isopen}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {ROUTES.map((item, index: number) =>
                        item.isNot ? null : (
                            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    onClick={() => handleroutePage(item)}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: store.isopen ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: store.isopen ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={t(item.title)}
                                        sx={{
                                            opacity: store.isopen ? 1 : 0,
                                            color: location.pathname.indexOf(setPathEvent(`${item.path}`)) != -1 ? "red" : "#075443",
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ),
                    )}
                </List>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, pb: 1, pl: 3, pr: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    )
}
export default observer(MiniDrawer)
