import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src='https://see.fontimg.com/api/renderfont4/8MgZA/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjRjNGM0YzIiwiYmdjIjoiIzA5MDkwOSIsInQiOjF9/Q29tbXM/awmu-slant-demo.png' alt='logo' />
          </Typography>

            <Button color="inherit">Vanguard</Button>
            <Button color="inherit">MW2022</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;