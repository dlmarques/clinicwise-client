import styles from './messages.module.scss';
import UsersList from './components/UsersList/UsersList';
import ChatBox from './components/Chatbox/ChatBox';
import { useSelector } from 'react-redux';

const Messages = () => {
  const selectedUser = useSelector((state: any) => state.chat.selectedChat);
  return (
    <div className={styles['messages']}>
      {selectedUser ? <ChatBox /> : <UsersList />}
    </div>
  );
};

export default Messages;
