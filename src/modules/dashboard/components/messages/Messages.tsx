import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './messages.module.scss';
import UsersList from './components/UsersList/UsersList';
import ChatBox from './components/Chatbox/ChatBox';
import ChatInput from './components/ChatInput/ChatInput';

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState();
  return (
    <div className={styles['messages']}>
      {selectedUser ? (
        <ChatBox />
      ) : (
        <UsersList setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
};

export default Messages;
