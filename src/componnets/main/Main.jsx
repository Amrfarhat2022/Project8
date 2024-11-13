import { Typography, Container, IconButton, Box, Stack } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import { useTheme } from "@emotion/react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from "@mui/icons-material";


const Main = () => {
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const theme = useTheme()
    const [value, setValue] = useState(2);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container sx={{
            py: 4
        }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} bgcolor={"#2E2E2E"} flexWrap={"wrap"} gap={3} sx={{
                mb: 2
            }}>
                <Box>
                    <Typography variant="h6">
                        Selected Products
                    </Typography>

                    <Typography variant="body1" fontWeight={300}>
                        All our new arrivals in exclusive brand selection
                    </Typography>
                </Box>
                <ToggleButtonGroup sx={{
                    "Mui-selected": {
                        border: "1px solid rgba(233,69,96,0.5) !important",
                        color: "#e94560",
                        bgcolor: "initial"
                    }
                }} color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"

                >
                    <ToggleButton sx={{
                        color: theme.palette.text.primary
                    }} className="myButton" value="left" aria-label="left aligned">
                        all products
                    </ToggleButton>
                    <ToggleButton sx={{
                        mx: "16px !important",
                        color: theme.palette.text.primary,
                    }} className="myButton" value="center" aria-label="centered">
                        men category
                    </ToggleButton>
                    <ToggleButton sx={{
                        color: theme.palette.text.primary
                    }} className="myButton" value="right" aria-label="right aligned">
                        women category
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {["aaa", "sss"].map((item) => {
                    return (
                        <Card key={item} sx={{ maxWidth: 360, ":hover .MuiCardMedia-root": { scale: "1.1", transition: "0.4s", rotate: "1deg" } }}>
                            <CardMedia
                                sx={{ height: 280 }}
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Women Fashion
                                    </Typography>
                                    <Typography>
                                        150 EGY
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                justifyContent: "space-between"
                            }}>
                                <Button onClick={handleClickOpen} sx={{
                                    textTransform: "capitalize"
                                }} size="large">
                                    <AddShoppingCartIcon sx={{
                                        fontSize: "23px",
                                        mr: 1
                                    }} />
                                    Add To Cart

                                </Button>
                                <Box sx={{ '& > legend': { mt: 2 } }}>


                                    <Rating name="read-only" precision={0.5} value={4.5} readOnly />
                                </Box>
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>


            <Dialog className="border-style"
                sx={{
                    ".MuiPaper-root": { minWidth: { xs: "100%", md: "800px" } }
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton sx={{
                    ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
                    position: "absolute",
                    right: 9,
                    top: 0,
                }} onClick={handleClose} >
                    <Close />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}>
                    <Box>
                        <img width={400} src="src\images\final.png" alt="" />
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            Womens Fishions
                        </Typography>
                        <Typography my={0.5} color="crimson">
                            12.99$
                        </Typography>
                        <Typography variant="body2">
                            lizards are wide spread group of squamate

                        </Typography>

                        <Stack direction={"row"}>
                            {["src\images\co.jpg", "src\images\coo.jpg"].map((item) => {
                                return (

                                    <img width={90} key={item} src={item} alt="" />
                                )
                            })}
                        </Stack>
                    </Box>
                </Box>
            </Dialog>



        </Container>
    )
}
export default Main;