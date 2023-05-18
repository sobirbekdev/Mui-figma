import { Box, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Footer() {


    return (
        <Box sx={{ bgcolor: "#45B871", display: 'flex', justifyContent: 'center', alignItems: 'center', height: "452px", flexDirection: 'column' }}>
            <h1 className="text-white text-[50px] max-w-[725px] text-center">Sign up & Enroll now,and Get Free Trial For 20Days</h1>
            <Toolbar sx={{ display: 'flex', gap: '20px', mt: '50px' }}>
                <NavLink>
                    <Button sx={{ background: "#45B871", border: 'solid 2px #fff', color: 'white' }} variant="outlined" color="warning" size="large">Sign up</Button>
                </NavLink>
                <NavLink>
                    <Button sx={{ background: "#45B871", border: 'solid 2px #fff', color: 'white' }} variant="outlined" color="warning" size="large">Start Free Trial</Button>
                </NavLink>
            </Toolbar>
        </Box>
    );
}