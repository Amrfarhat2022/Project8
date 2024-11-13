import ExpandMore from '@mui/icons-material/ExpandMore'
import { Typography, Box, Paper } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from '@mui/material';
import { KeyboardArrowRight, NoEncryption } from '@mui/icons-material';

function Links({ title }) {
    return (


        <Box sx={{
            display: "flex", alignItems: "center", position: "relative",
            ":hover .show-when-hover": { display: "block" },
            ":hover": { cursor: "pointer" }
        }}>
            <Typography variant="body1">
                {title}
            </Typography>
            <ExpandMore sx={{
                fontSize: "15px",
                ml: 1,
            }} />


            <Paper
                className="show-when-hover"
                sx={{

                    position: "absolute",
                    top: "100%",
                    transform: "translateX(-50%)",
                    left: "50%",
                    minWidth: "180px",
                    display: "none",
                }}>
                <List sx={{
                    fontSize: "15px",


                }}>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                mx: 1.5,
                            }}>
                            <ListItemText
                                sx={{
                                    "& .MuiTypography-root": { fontSize: "15px" },
                                }} primary="Dashbord" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{
                        ":hover .show-when-Hover": { display: "block" },
                        position: "relative",


                    }} disablePadding>
                        <ListItemButton sx={{
                            display: "flex",
                            p: 0,
                            mx: 1.5,


                        }}

                            component="a" href="#simple-list">
                            <ListItemText sx={{


                            }} primary="Products" />
                            <KeyboardArrowRight />
                        </ListItemButton>
                        <Box sx={{
                            position: "absolute",
                            top: 0,
                            left: "100%"

                        }}>
                            <Paper className="show-when-Hover " sx={{
                                bgcolor: "#333",
                                ml: 1, minWidth: "150px",
                                display: "none",
                            }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText sx={{
                                                "& .MuiTypography-root": { fontSize: "13px" }
                                            }} primary="Add  Product" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="#simple-list">
                                            <ListItemText
                                                sx={{
                                                    "& .MuiTypography-root": { fontSize: "13px" },

                                                }} primary="Edit Product" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Box>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                mx: 1.5,
                            }}>
                            <ListItemText primary="orders" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                mx: 1.5,
                            }} component="a" href="#simple-list">
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Paper>

        </Box>

    )
}

export default Links