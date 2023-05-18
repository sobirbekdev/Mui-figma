import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ImgPlayWorks from "./Imgs/Group 57.svg"

export default function SimplePaper() {
    return (
        <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
            <Box sx={{ width: "550px", }}>
                <Box
                    sx={{
                        background: " rgba(9, 188, 77, 0.2)",
                        mt: '150px',
                        display: 'flex',
                        gap: '50px',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 230,
                            height: 230,
                        },
                    }}
                >
                    <Paper sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} elevation={3} >
                        <Button sx={{ borderRadius: "50%", p: '15px', fontSize: '20px', fontWeight: 'bold' }} variant="contained" color="success">1</Button>
                        <h4 className='mt-4'>  Create Account</h4>
                    </Paper>
                    <Box sx={{
                        pt: '30px',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 230,
                            height: 230,
                        },
                    }}>
                        <Paper sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} elevation={3} >
                            <Button sx={{ borderRadius: "50%", p: '15px', fontSize: '20px', fontWeight: 'bold' }} variant="contained" color="success">2</Button>
                            <h4 className='mt-4'>  Create Account</h4>
                        </Paper>
                    </Box>
                    <Paper sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', }} elevation={3} >
                        <Button sx={{ borderRadius: "50%", p: '15px', fontSize: '20px', fontWeight: 'bold' }} variant="contained" color="success">3</Button>
                        <h4 className='mt-4'>  Create Account</h4>
                    </Paper>
                    <Box sx={{
                        pt: '30px',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 230,
                            height: 230,
                        },
                    }}>
                        <Paper sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center' }} elevation={3} >
                            <Button sx={{ borderRadius: "50%", p: '15px', fontSize: '20px', fontWeight: 'bold' }} variant="contained" color="success">4</Button>
                            <h4 className='mt-4'>  Create Account</h4>
                        </Paper>
                    </Box>
                </Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', mt: '150px'}}>
                <h1 className='max-w-[416px] text-[58px] fw-bold'>Get Started in 4 Easy Steps</h1>
                <span className='flex flex-col  mt-4'>
                    <p className='text-[ #8C8E91;] max-w-[416px] '>
                        Proper and good education is very important for all of us.
                        through the life among people of any age group, cast, creed, religion and region.
                    </p>
                    <p className='text-[ #8C8E91;] max-w-[416px] mt-2 '>
                        It is the process of achieving knowledge, values, skills, beliefs, and
                        the process of facilitating learning, or the acquisiof  values.
                    </p>
                </span>

                <Button sx={{ display: 'flex', justifyContent: 'flex-start', mt: '50px',width:'300px' }} >
                    <img src={ImgPlayWorks} alt="ImgPlayWorks" />
                    See How it Works
                </Button>
            </Box>
        </Box>
    );
}