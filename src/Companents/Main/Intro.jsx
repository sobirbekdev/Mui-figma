import { Box, Button, Toolbar, } from "@mui/material";
import ImgInro from "./Imgs/img.svg";
import ImgPlay from "./Imgs/Group 99.svg";
import { NavLink } from 'react-router-dom';

export function Intro() {
    return (
        <>
            <Box sx={{ display: "flex",bgcolor:"#E4F5EB" , paddingBottom:"50px"}}>
                <Box sx={{ width: "50%", marginLeft: '25px', display: "flex", justifyContent: 'flex-start' }}>
                    <Box sx={{ maxWidth: "612px", display: 'flex', flexDirection: 'column', marginLeft:'25px' }}>
                        <h1 className="text-[56px] pt-20 ">
                            Anytime,anywhere Develop  your skill
                            by Online
                        </h1>
                        <p className="text-[#6C6C6A] text-[18px] mt-[15px] max-w-[612px]">
                            Online education is a form of education where students use their home computers through
                            the
                            internet. For many nontraditional students, among them all those who want to continue.
                        </p>
                        <Box sx={{
                            display: 'flex', alignItems: 'center',
                            gap: "25px", marginTop: "15px"
                        }}>
                            <NavLink>
                                <Button sx={{ padding: '0px 0px', width: "150px", height: '60px' }} 
                                variant="contained"
                                    color="success">
                                    Success
                                </Button>
                            </NavLink>
                            <NavLink>
                                <Button sx={{ padding: '14px 15px', width: "200px", height: '70px' }} >
                                    <img className="w-[66px] p-0 m-0" src={ImgPlay} alt="ImgPlay " />
                                    Play Video
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                </Box>
                <Toolbar sx={{ width: "50%" }}>
                    <img  src={ImgInro} alt="not img" />
                </Toolbar>
            </Box>
        </>
    )
}