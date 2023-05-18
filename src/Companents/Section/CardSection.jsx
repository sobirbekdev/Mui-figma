import * as React from 'react';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CardSection({ useData }) {
    return (
        <Box className='flex justify-center flex-col items-center  bg-[#E4F5EB] px-3 py-28'>
            <Box sx={{
                display: "flex", justifyContent: 'space-between', rowGap: "25px",
            }} flexWrap="wrap">
                {useData && useData.map((user, index) => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={user.avatar}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. A
                            </Typography>
                        </CardContent>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <CardMedia
                                        component="img"
                                        image={user.avatar}
                                        alt="Paella dish"
                                    />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={user.first_name}
                            subheader={user.last_name}
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore>
                                <Typography variant="body2" color="text.secondary">
                                    $100
                                </Typography>
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                    </Card>
                ))
                }
            </Box>
            <Button sx={{ width: '200px', mt: '50px', p: '15px ' }} variant="contained" color="success">View All Courses</Button>
        </Box>
    );
}