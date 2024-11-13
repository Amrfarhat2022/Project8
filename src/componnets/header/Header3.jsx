import { Container, IconButton, Stack, Typography, capitalize } from "@mui/material"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WindowIcon from '@mui/icons-material/Window';
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import LaptopIcon from '@mui/icons-material/Laptop';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";



const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme()

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    (event.key === 'Tab' ||
                        event.key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <Container sx={{

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
        }}>

            <Box>
                <Button

                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        width: "222px",
                        bgcolor: theme.palette.mycolor.main,
                        color: theme.palette.text.primary,
                    }}
                >
                    <WindowIcon />
                    <Typography sx={{
                        padding: "0",
                        textTransform: "capitalize",
                        mx: 1,

                    }}>
                        Categories
                    </Typography>

                    <Box flexGrow={1} />

                    <ArrowForwardIosIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                        ".MuiPaper-root": { width: "220px", bgcolor: theme.palette.mycolor.main }
                    }}
                >

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ElectricBikeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Bikes</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LaptopIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Electronics</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AutoStoriesIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Books</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SportsEsportsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Games</ListItemText>
                    </MenuItem >
                </Menu>
            </Box>

            {useMediaQuery('(min-width:1200px)') && (
                <Stack gap={4} direction={"row"} alignItems={"center"}>
                    <Links title={"Home"} />
                    <Links title={"Mega Menu"} />
                    <Links title={"Full Screen Menu"} />
                    <Links title={"pages"} />
                    <Links title={"User Account"} />
                    <Links title={"Vendor Account"} />
                </Stack>

            )}
            



            {useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top", true)}>
                <MenuIcon />
            </IconButton>)}

            <Drawer
                sx={{

                    ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "100%" }
                }}
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
            >

                <Box sx={{
                    width: "444px",
                    mx: "auto",
                    mt: 6,
                    position: "relative",
                    pt: 10,

                }}>
                    <IconButton sx={{
                        ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
                        position: "absolute",
                        right: 9,
                        top: 0,
                    }} onClick={toggleDrawer("top", false)} >
                        <Close />
                    </IconButton>
                    {[
                        { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Mega Menu", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Full Screen Menu", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "User Account", subLink: ["Link1", "Link2", "Link3"] },
                        { mainLink: "Vendor Account", subLink: ["Link1", "Link2", "Link3"] },].map((item) => {

                            return (
                                <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial", }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography > {item.mainLink}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List sx={{ py: 0, px: 0 }}>
                                            {item.subLink.map((link) => {
                                                return (
                                                    <ListItem key={link} sx={{
                                                        py: 0, px: 0,
                                                    }}>
                                                        <ListItemButton>
                                                            <ListItemText primary={link} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )

                                            })}

                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}


                </Box>
            </Drawer>

        </Container>

    );
}
export default Header3;