import { createTheme } from "@mui/material"
import { jaJP } from "@mui/material/locale"

const mainColor = "#1976D2" // 全局主体色
export const customTheme = createTheme(
    {
        typography: {
            fontFamily: [
                "Noto Sans CJK JP",
                "Noto Sans JP",
                "-apple-system",
                "BlinkMacSystemFont",
                "Helvetica Neue",
                "Roboto",
                "Segoe UI",
                "arial",
                "Hiragino Sans",
                "HiraKakuProN-W3",
                "Hiragino Kaku Gothic ProN",
                "BIZ UDPGothic",
                "Meiryo",
                "Yu Gothic",
                "sans-serif",
            ].join(","),
            h2: {
                fontSize: 30,
                fontWeight: "bold",
            },
        },
        palette: {
            primary: {
                main: mainColor,
                contrastText: "white",
            },
            secondary: {
                main: "#E91E63",
            },
            success: {
                main: "#43A047",
                contrastText: "white",
            },
            info: {
                main: "#E3F2E4",
                contrastText: "#43A047",
            },
            warning: {
                main: "#FEE4E5",
                contrastText: "#FF5252",
            },
            error: {
                main: "#FF5252",
                contrastText: "#FF5252",
            },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: mainColor,
                        color: "#fff",
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                    },
                },
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        padding: "1px",
                    },
                    popper: {
                        zIndex: 9,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        overflow: "inherit",
                    },
                },
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#FAFAFA",
                        padding: "13px 16px 13px 24px",
                    },
                    title: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        flex: 1,
                    },
                },
            },
            MuiListItem: {
                styleOverrides: {
                    root: {
                        paddingLeft: 8,
                        paddingRight: 8,
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        paddingBottom: 16,
                        paddingTop: 16,
                        borderRadius: 4,
                    },
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {},
                },
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        marginTop: 0,
                        marginBottom: 0,
                    },
                },
            },
            MuiTableCell: {
                defaultProps: {
                    size: "small",
                },
                styleOverrides: {
                    head: {
                        fontSize: 14,
                        fontWeight: "bold",
                        border: "none",
                        whiteSpace: "nowrap",
                    },
                    body: {
                        fontSize: 16,
                        padding: 12,
                        paddingLeft: 16,
                        paddingRight: 16,
                        lineHeight: "24px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        height: 4,
                    },
                },
            },
        },
    },
    jaJP,
)
