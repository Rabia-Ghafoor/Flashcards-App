import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, AppBar, Toolbar, Button, Grid, Card, CardContent, IconButton, Menu, Container, Avatar, Tooltip, MenuItem, TextField } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

const pages = [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ bgcolor: "black", color: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box m="3px" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/">
                            <Image
                                src="/images/logo.png" // Path to the image in the public folder
                                alt="Logo"
                                width={75} // Set your desired width
                                height={75} // Set your desired height

                            /></Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ textAlign: 'center', my: 1, mx: 3, color: 'white', display: 'block', ":hover": { bgcolor: 'orangered', color: 'white' } }}
                                href={page.path}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <SignedOut>
                            <Box display={'flex'} sx={{ my: 1, mx: 3 }}>
                                <Box>
                                    <Button sx={{ mx: 1, color: 'white', display: 'block', ":hover": { bgcolor: 'white', color: 'black' } }} href="/sign-up">Sign Up</Button>
                                </Box>
                                <Box>
                                    <Button sx={{ mx: 1, color: 'orangered', ":hover": { bgcolor: 'orangered', color: 'white' } }} href="/sign-in"><b>Login</b></Button>
                                </Box>
                            </Box>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
}
export default ResponsiveAppBar;




