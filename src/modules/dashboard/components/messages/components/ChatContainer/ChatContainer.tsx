import { Message } from '../../../../../../models/Message';
import styles from './chat-container.module.scss';

const ChatContainer = ({ mine, text }: Message) => {
  return (
    <div className={styles['chat-container']}>
      <div className={styles.space}></div>
      <div className={mine ? styles['my-message'] : styles['foreign-message']}>
        {text}
      </div>
      <div className={styles.space}></div>
    </div>
  );
};

export default ChatContainer;
