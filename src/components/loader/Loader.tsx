import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <CircularProgress
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
export default Loader;
