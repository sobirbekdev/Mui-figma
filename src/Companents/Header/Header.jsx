import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AlCoress from "./AlCoress";

export function Header() {
    return (
        <Box >
            <AppBar sx={{ background: "#E4F5EB", display: "flex", justifyContent: "space-between" }} position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "red" }}>
                            <span className="text-green-500">U</span>-Coda
                        </Typography>
                    </Toolbar>
                    <Toolbar sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <NavLink>
                            <Typography sx={{ color: "#575859" }}>Home</Typography>
                        </NavLink>
                        <AlCoress />
                        <NavLink>
                            <Typography sx={{ color: "#575859" }}>Pricing</Typography>
                        </NavLink>
                        <NavLink>
                            <Typography sx={{ color: "#575859" }}>Blog</Typography>
                        </NavLink>
                    </Toolbar>
                    <Toolbar sx={{ display: "flex", gap: "20px" }}>
                        <NavLink>
                            <Button sx={{ color: "#575859", bgcolor: "#E4F5EB" }} variant="contained" color="success">
                                Login
                            </Button>
                        </NavLink>
                        <NavLink>
                            <Button sx={{ color: "#575859", bgcolor: "#E4F5EB" }} variant="contained" color="success">
                                Free Trial
                            </Button>
                        </NavLink>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>

    )
}