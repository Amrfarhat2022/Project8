import { Container, Stack, Typography, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Badge } from "@mui/material";
import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';







const Search = styled('div')(({ theme }) => ({
    flexGrow: 0.4,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    '&:hover': {
        border: "1px solid #333"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "300px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header2 = () => {
    const options = [
        'All Categories',
        'Car',
        'Clothes',
        'Electorincs',

    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState();
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme()
    return (

        <Container sx={{
            my: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }} >
            <Stack direction={"column"} alignItems={"center"}>
                <ShoppingCartIcon

                    sx={{
                        fontSize: "20px",
                        color: "white",

                    }}
                />
                <Typography
                    sx={{
                        fontSize: "14px",
                        color: "white",
                    }}
                    variant="body2"


                >
                    E-commerce

                </Typography>

            </Stack>
            <Search sx={{
                display: "flex",
                justifyContent: "space-between",

                borderRadius: "22px",
            }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />

                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{
                        bgcolor: theme.palette.mycolor.main,
                        borderTopRightRadius: "22px",
                        borderBottomRightRadius: "22px",
                        p: 0,
                    }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText

                            sx={{
                                width: "80px",
                                textAlign: "center",
                                "&:hover": { cursor: "pointer" },

                            }}
                            secondary={options[selectedIndex]}
                        />
                        <ExpandMore
                            sx={{
                                fontSize: "12px",
                            }} />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem sx={{

                            fontSize: "13px",
                        }}
                            key={option}

                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>

            </Search>
            <Stack direction={"row"}>



                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <IconButton>
                    <PersonOutlineIcon />
                </IconButton>
            </Stack>


        </Container>


    );
}
export default Header2;