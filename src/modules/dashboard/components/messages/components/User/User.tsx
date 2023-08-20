import { Avatar, AvatarBadge } from '@chakra-ui/react';
import styles from './user.module.scss';
import { useDispatch } from 'react-redux';
import { chatActions } from '../../../../../../store/user/chat';

interface ChatUserProps {
  id: string;
  source: string;
  name: string;
  message: string;
}

const ChatUser = ({ id, source, name, message }: ChatUserProps) => {
  const dispatch = useDispatch();
  const selectChat = (id: string) => {
    dispatch(chatActions.selectChat(id));
  };

  return (
    <div className={styles['chat-user']} onClick={() => selectChat(id)}>
      <Avatar size="md" src={source}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatUser;
