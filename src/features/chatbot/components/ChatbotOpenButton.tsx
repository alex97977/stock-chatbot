import { Box, Fab } from '@mui/material';
import BotIcon from '@mui/icons-material/SmartToy';

type ChatbotOpenButtonProps = {
  onClickOpen: () => void;
};

const ChatbotOpenButton: React.FC<ChatbotOpenButtonProps> = ({
  onClickOpen,
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
      }}
    >
      <Fab
        variant="extended"
        color="primary"
        size="large"
        onClick={onClickOpen}
      >
        <BotIcon sx={{ mr: 1 }} />
        Chat
      </Fab>
    </Box>
  );
};
export default ChatbotOpenButton;
