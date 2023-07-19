import { Avatar, AvatarBadge } from '@chakra-ui/react';
import styles from './user.module.scss';

interface ChatUserProps {
  source: string;
  name: string;
}

const ChatUser = ({ source, name }: ChatUserProps) => {
  return (
    <div className={styles['chat-user']}>
      <Avatar size="md" src={source}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
    </div>
  );
};

export default ChatUser;
