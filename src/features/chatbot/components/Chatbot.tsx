import { Box, IconButton, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BotIcon from '@mui/icons-material/SmartToy';
import MessagesContainer from './messages/MessagesContainer';

type ChatbotProps = {
  onClickClose: () => void;
};

const Chatbot: React.FC<ChatbotProps> = ({ onClickClose }) => {
  return (
    <Paper
      sx={(theme) => ({
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        height: '50vh',
        width: '25vw',
        minWidth: '500px',
        [theme.breakpoints.down('md')]: {
          height: '100%',
          width: '100%',
          bottom: 0,
          right: 0,
        },
      })}
    >
      <Paper
        elevation={5}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'primary.main',
          padding: 1,
          position: 'absolute',
          zIndex: 10,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BotIcon sx={{ color: 'common.white' }} />
          <Typography
            sx={{
              color: 'common.white',
              ml: 1,
            }}
          >
            LSEG chatbot
          </Typography>
        </Box>
        <IconButton size="medium" onClick={onClickClose}>
          <CloseIcon sx={{ color: 'common.white' }} />
        </IconButton>
      </Paper>
      <MessagesContainer />
    </Paper>
  );
};
export default Chatbot;
