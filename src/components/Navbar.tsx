import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#fff',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.04)',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navLink: {
        textDecoration: 'none',
    },
    navButton: {
        backgroundColor: 'var(--primary-bg)',
        color: 'var(--text-color)',
        textTransform: 'capitalize',
        padding: theme.spacing(1, 2),
    },
}));

const Navbar = () => {
    const { header, nav, navButton, navLink } = useStyles();
    const auth = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        auth.logout();
        history.push('/login');
    };

    return (
        <AppBar position="sticky" className={header}>
            <Toolbar className={nav}>
                <Link to="/stem-diverse-tv-cms">
                    <img src={logo} alt="Stem Diverse TV Logo" height="70" />
                </Link>
                {auth.isAuthenticated() ? (
                    <Button onClick={handleLogout} className={navButton}>
                        Logout
                    </Button>
                ) : (
                    <Link className={navLink} to="/login">
                        <Button className={navButton}>Login</Button>
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
