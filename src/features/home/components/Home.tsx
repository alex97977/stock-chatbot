import { Box, Typography } from '@mui/material';
import ChatbotContainer from '@/features/chatbot/components/ChatbotContainer';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Welcome!
        </Typography>
        <Box>
          <Typography variant="h6" color="primary">
            Try our new chatbot! (bottom of the page)
          </Typography>
        </Box>
      </Box>
      <ChatbotContainer />
    </Box>
  );
};
export default Home;
