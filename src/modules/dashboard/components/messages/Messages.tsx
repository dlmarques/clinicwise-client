import { useTranslation } from 'react-i18next';
import styles from './messages.module.scss';
import UsersList from './components/UsersList/UsersList';
import ChatBox from './components/Chatbox/ChatBox';
import ChatInput from './components/ChatInput/ChatInput';

const Messages = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['messages']}>
      <h3>{t('messages')}</h3>
      <UsersList />
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default Messages;
