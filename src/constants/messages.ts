const messages = {
  HELLO: "Hello! Welcome to LSEG. I'm here to help you.",
  SELECT_EXCHANGE: 'Please select a Stock Exchange.',
  SELECT_STOCK: 'Please select a stock.',
  SELECT_OPTION: 'Please select an option.',
  MAIN_MENU: 'Main menu',
  GO_BACK: 'Go back',
};

export const RETURN_OPTIONS = [
  {
    label: messages.MAIN_MENU,
    value: messages.MAIN_MENU,
  },
  {
    label: messages.GO_BACK,
    value: messages.GO_BACK,
  },
];

export default messages;
