import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const MainNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Typography variant="h2" color="white">
            The Electricians Office
          </Typography>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <Link to={'/register/'}> 
            <Button
              color="primary"
              variant="contained"
            >
              Sign Up
            </Button>
          </ Link>
          <Link to={'/login/'}>           
            <Button
              color="primary"
              variant="contained"
            >
              Sign In
            </Button>
          </ Link>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default MainNavbar;
