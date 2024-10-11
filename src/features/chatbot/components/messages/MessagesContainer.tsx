import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useExchanges from '../../hooks/useExchanges';
import messages, { RETURN_OPTIONS } from '@/constants/messages';
import Sender from '../../types/SenderEnum';
import MessageType from '../../types/MessageType';
import MessageOption from './MessageOption';
import Step from '../../types/StepEnum';
import OptionType from '../../types/OptionType';

const getDefaultMessages = (
  getExchangeOptions: () => OptionType[],
): MessageType[] => [
  {
    sender: Sender.Bot,
    text: messages.HELLO,
    options: [],
  },
  {
    sender: Sender.Bot,
    text: messages.SELECT_EXCHANGE,
    options: getExchangeOptions(),
  },
];

const MessagesContainer = () => {
  const { exchangesByCode, getExchangeOptions, getStockOptions } =
    useExchanges();
  const [currentMessages, setCurrentMessages] = useState(() =>
    getDefaultMessages(getExchangeOptions),
  );
  const [step, setStep] = useState(Step.Exchange);
  const [selectedExchangeCode, setSelectedExchangeCode] = useState<
    string | null
  >(null);
  const containerRef = useRef(null);

  const onOptionClick = (value: string, label: string) => {
    //Add the message directly, on behalf of the user
    const newMessages: MessageType[] = [
      {
        sender: Sender.User,
        text: label,
        options: [],
      },
    ];
    //Based on the current step, perform a certain action
    switch (step) {
      case Step.Exchange:
        {
          setSelectedExchangeCode(value);
          setStep(Step.Stock);
          newMessages.push({
            sender: Sender.Bot,
            text: messages.SELECT_STOCK,
            options: getStockOptions(value),
          });
        }
        break;
      case Step.Stock:
        {
          const price =
            exchangesByCode[selectedExchangeCode ?? '']?.topStocks[value]
              ?.price;
          setStep(Step.Price);
          newMessages.push({
            sender: Sender.Bot,
            text: `Stock price of ${label} is ${price ?? '-'}. ${
              messages.SELECT_OPTION
            }`,
            options: RETURN_OPTIONS,
          });
        }
        break;
      case Step.Price:
        {
          if (value === messages.MAIN_MENU) {
            newMessages.push(getDefaultMessages(getExchangeOptions).pop()!);
            setStep(Step.Exchange);
          } else if (value === messages.GO_BACK) {
            newMessages.push({
              sender: Sender.Bot,
              text: messages.SELECT_STOCK,
              options: getStockOptions(selectedExchangeCode ?? ''),
            });
            setStep(Step.Stock);
          }
        }
        break;
    }

    setCurrentMessages((prev) => [...prev, ...newMessages]);
  };

  //Scrolling down when a new message is added
  useEffect(() => {
    const element = containerRef.current as unknown as HTMLDivElement;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [currentMessages]);

  return (
    <Box
      sx={{
        padding: '70px 10px 10px 10px',
        overflowY: 'scroll',
        height: '100%',
      }}
      ref={containerRef}
    >
      {currentMessages.map((message, i) => (
        <Box
          key={i}
          sx={[
            {
              margin: '5px',
            },
            message.sender === Sender.User && {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            },
          ]}
        >
          <Typography
            sx={{
              backgroundColor:
                message.sender === Sender.Bot
                  ? 'info.light'
                  : 'secondary.light',
              padding: 1,
              borderRadius: '10px',
            }}
            variant="body2"
          >
            {message.text}
          </Typography>
          <Box>
            {message.options.map((option, i) => (
              <MessageOption
                key={i}
                {...option}
                onOptionClick={onOptionClick}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default MessagesContainer;
