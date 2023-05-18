import { Box } from '@mui/material';
import ImgUdmey from "./Imgs/udemy-logo.svg";
import ImgFivver from "./Imgs/1_pO9ttF1Z_KTOre0yGiClxQ.svg";
import ImgByJus from "./Imgs/download 1.svg";
import ImgMicrosof from "./Imgs/microsoft_PNG4.svg";
import { Link } from 'react-router-dom';

export function LogoBar() {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', mt: '55px', padding: '0 30px' }}>
            <h3 className='w-[300px]'>
                Trusted by 30,000+ satisfied students
            </h3>
            <Link to={"https://www.udemy.com/"} ><img src={ImgUdmey} alt="ImgUdmey" /></Link>
            <Link to={"https://www.fiverr.com/"} ><img src={ImgFivver} alt="ImgFivver" /></Link>
            <Link to={"https://byjus.com/global/"} ><img src={ImgByJus} alt="ImgByJus" /></Link>
            <Link to={"https://www.microsoft.com/"} ><img src={ImgMicrosof} alt="ImgMicrosof" /></Link>
        </Box>
    )
}