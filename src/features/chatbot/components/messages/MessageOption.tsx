import { Button, Typography } from '@mui/material';
import OptionType from '../../types/OptionType';

type MessageOptionProps = OptionType & {
  onOptionClick: (value: string, label: string) => void;
};

const MessageOption: React.FC<MessageOptionProps> = ({
  label,
  value,
  onOptionClick,
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        width: '300px',
        margin: '2px',
      }}
      onClick={() => onOptionClick(value, label)}
    >
      <Typography>{label}</Typography>
    </Button>
  );
};
export default MessageOption;
