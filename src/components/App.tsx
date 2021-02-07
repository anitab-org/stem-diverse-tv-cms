import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Navbar from './Navbar';
import { Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        siteWrapper: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
    })
);

const routes = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/login',
        component: <Login />,
    },
];

function App() {
    const { siteWrapper } = useStyles();

    return (
        <Router>
            <AuthProvider>
                <Box className={siteWrapper}>
                    <Navbar />
                    <Switch>
                        {routes.map((route) => (
                            <Route key={route.path} exact path={route.path}>
                                {route.component}
                            </Route>
                        ))}
                    </Switch>
                </Box>
            </AuthProvider>
        </Router>
    );
}

export default App;
