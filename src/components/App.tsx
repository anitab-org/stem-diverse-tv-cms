import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AuthProvider } from '../context/AuthContext';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Navbar from './Navbar';
import Register from '../pages/Register';

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
  {
    path: '/register',
    component: <Register />,
  },
];

function App() {
  const { siteWrapper } = useStyles();

  return (
    <Router basename="/stem-diverse-tv-cms">
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
