import OptionType from './OptionType';
import Sender from './SenderEnum';

type MessageType = {
  sender: Sender;
  text: string;
  options: OptionType[];
};

export default MessageType;
