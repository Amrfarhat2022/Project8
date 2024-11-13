import React, { useContext } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import { AddBox, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Header1 = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{

            bgcolor: "#2b3445",
            py: "5px",
            borderBottomRightRadius:4,
            borderBottomLeftRadius:4,

        }}>

            <Container>
            <Stack direction={"row"} alignItems={"center"}>

<Typography
    sx={{

        mr: 2,
        p: "3px 10px",
        bgcolor: "#D23F57",
        borderRadius: "12px",
        fontSize: "10px",
        fontWeight: "bold",
        color: "#fff",

    }}
    variant="body2"
>
    Hot

</Typography>
<Typography
    sx={{
        fontsize: "10px",
        color: "#fff",
        fontWeight: 300,

    }}
    variant="body2"
>

    Free Express Shiping

</Typography>


<Box flexGrow={1} />


<div>
    {theme.palette.mode === "light" ? (
        <IconButton
            onClick={() => {
                localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
            }}
            color="inherit"
        >
            <LightModeOutlined fontSize="small" sx={{ color: "white" }} />
        </IconButton>
    ) : (
        <IconButton
            onClick={() => {
                localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
            }}
            color="inherit"
        >
            <DarkModeOutlined fontSize="small" />
        </IconButton>
    )}
</div>

<TwitterIcon
    sx={{
        fontSize: "16px",
        color: "#fff",
    }}
/>


<FacebookIcon
    sx={{
        fontSize: "16px",
        color: "#fff",
        mx: 1,
    }}
/>


<InstagramIcon
    sx={{
        fontSize: "16px",
        color: "#fff",
    }}
/>




</Stack>
            </Container>

        </Box>

    );
}
export default Header1;