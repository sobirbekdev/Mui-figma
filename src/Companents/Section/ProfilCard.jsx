import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';


export function ProfilCard({ useProfil }) {
    return (
        <Box>
            <h1 className='text-center my-20'>Students say about us </h1>
            <Grid
                spacing={4}
                container
                gap="30px"
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {useProfil && useProfil.map((user, index) => (
                    <Card sx={{ maxWidth: 300, mt: "120px" }}>
                        <CardActionArea>
                            <CardMedia sx={{ borderRadius: '50%', width: '100px', height: '100px', p: '20px' }}
                                component="img"
                                image={user.avatar}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                    {user.first_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid>
        </Box>
    )
}
