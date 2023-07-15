import { Message } from '../../../../../../models/Message';
import styles from './chat-container.module.scss';

const ChatContainer = ({ mine, text }: Message) => {
  return (
    <div className={mine ? styles['my-message'] : styles['foreign-message']}>
      {text}
    </div>
  );
};

export default ChatContainer;
