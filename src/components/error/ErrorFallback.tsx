import { Box, Button, Typography } from '@mui/material';

const ErrorFallback = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: 'text.error',
        }}
      >
        Ooops, something went wrong :(
      </Typography>
      <Button
        sx={{
          mt: 4,
        }}
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Box>
  );
};
export default ErrorFallback;
