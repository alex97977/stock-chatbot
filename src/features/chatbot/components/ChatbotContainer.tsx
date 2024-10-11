import { useState } from 'react';
import ChatbotOpenButton from './ChatbotOpenButton';
import Chatbot from './Chatbot';

const ChatbotContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return <Chatbot onClickClose={() => setIsOpen(false)} />;
  }

  return <ChatbotOpenButton onClickOpen={() => setIsOpen(true)} />;
};
export default ChatbotContainer;
