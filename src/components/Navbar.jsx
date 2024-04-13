import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#90415b' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
          <Button color="inherit"><Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

