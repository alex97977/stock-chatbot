import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001eff',
    },
    secondary: {
      main: '#ff5000',
      light: grey[100],
    },
    info: {
      light: blue[100],
      main: blue[300],
    },
  },
});

export default theme;
