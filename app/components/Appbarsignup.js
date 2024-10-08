'use client'
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, AppBar, Toolbar, Button, IconButton, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const pages = [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }, { name: 'About Us', path: '/aboutus' }, { name: 'Join Waitlist', path: 'https://tally.so/r/w7oa2A', type: 'special' }
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ bgcolor: "#1f1f1f", color: "#f0f0f0" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box m="3px" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={75}
                                height={75}
                            />
                        </Link>
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
                            PaperProps={{
                                sx: {
                                    bgcolor: '#1f1f1f',
                                    color: '#f0f0f0',
                                    margin: 0,
                                    padding: 1,
                                    boxShadow: 'none',

                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: '#f0f0f0',
                                        bgcolor: '#1f1f1f',
                                        textShadow: '0 0 10px #bb86fc, 0 0 20px #3700b3',
                                        fontFamily: 'Arial, sans-serif',
                                        ":hover": {
                                            bgcolor: '#3700b3',
                                            color: '#ffffff',
                                        },
                                        p: 1,
                                    }}
                                >
                                    <Button sx={{ textAlign: "center", color: "#f0f0f0" }} href={page.path}>{page.name}</Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 1,
                                    mx: 3,
                                    color: page.type === 'special' ? '#bb86fc' : '#f0f0f0',
                                    display: 'block',
                                    textAlign: "center",
                                    ":hover": { bgcolor: '#3700b3', color: 'white' }
                                }}
                                href={page.path}
                                target={page.type === 'special' ? '_blank' : '_self'}
                                rel={page.type === 'special' ? 'noopener noreferrer' : undefined}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <SignedOut>
                            <Box display={'flex'}>
                                <Button sx={{ mx: 1, color: '#bb86fc', ":hover": { bgcolor: '#3700b3', color: 'white' } }} href="/sign-in"><b>Login</b></Button>

                            </Box>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
