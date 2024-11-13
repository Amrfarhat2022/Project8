import { Container, Stack, Typography, Box ,Divider} from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

function Hero2() {
    const theme=useTheme()
    return (
        <Container sx={{
            mt: 1,
            
            bgcolor: theme.palette.mode === "dark"? "#000" : "#fff"
            
        }}>
            <Stack sx={{
                flexWrap:"wrap",
                
            }} direction={"row"}  alignItems={"center"} divider={useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem /> : null} >
                <Mybox icon={<ElectricBoltIcon />} title={"Fast Delivery"} subtitle={"Start from 10$"} />
                <Mybox icon={<WorkspacePremiumIcon />} title={"Money Guarantee"} subtitle={"7 Days Back"} />
                <Mybox icon={<AccessAlarmIcon />} title={"365 Days"} subtitle={"for free return"} />
                <Mybox icon={<CreditScoreIcon />} title={"Payment"} subtitle={"Secure System"} />
            </Stack>
        </Container>
    )
}

export default Hero2;



const Mybox = ({ icon, title, subtitle }) => {
    const theme = useTheme()
    return (
        <Stack className="border-style" sx={{
            width: "250px",
            flexGrow: 1,
            gap: 3,
            
            py: 1.6,
            justifyContent:useMediaQuery('(min-width:600px)')? "center" : "left"
        }} direction={"row"} alignItems={"center"}>
            {icon}
            <Box>
                <Typography variant='body1'>
                    {title}
                </Typography>
                <Typography sx={{
                    fontWeight: 300,
                    color: theme.palette.text.secondary
                }} variant='body1'>
                    {subtitle}
                </Typography>
            </Box>
        </Stack>
    )
}
