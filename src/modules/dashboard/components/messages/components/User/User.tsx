import { Avatar, AvatarBadge } from '@chakra-ui/react';
import styles from './user.module.scss';

interface ChatUserProps {
  source: string;
  name: string;
}

const ChatUser = ({ source, name }: ChatUserProps) => {
  return (
    <Avatar
      size="md"
      src={source}
      data-tooltip-id="my-tooltip"
      data-tooltip-content={name}
    >
      <AvatarBadge boxSize="1em" bg="green.500" />
    </Avatar>
  );
};

export default ChatUser;
