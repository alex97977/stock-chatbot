import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '@/assets/lseg-logo.svg';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: 'common.white',
          }}
        >
          <img src={logo} alt="logo" width={100} height={100} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
