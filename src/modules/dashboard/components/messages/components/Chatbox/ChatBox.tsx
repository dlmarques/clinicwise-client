import { useState, useEffect } from 'react';
import styles from './chat-box.module.scss';
import ChatContainer from '../ChatContainer/ChatContainer';
import { Message } from '../../../../../../models/Message';

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const arr = [
      { mine: false, text: 'lorem ipsum lorem ipsum', id: '1' },
      { mine: true, text: 'lorem ipsum lorem ipsum', id: '2' },
      { mine: false, text: 'lorem ipsum lorem ipsum', id: '3' },
      { mine: true, text: 'lorem ipsum lorem ipsum', id: '4' },
      { mine: false, text: 'lorem ipsum lorem ipsum', id: '5' },
      { mine: true, text: 'lorem ipsum lorem ipsum', id: '6' },
      { mine: false, text: 'lorem ipsum lorem ipsum', id: '7' },
      { mine: true, text: 'lorem ipsum lorem ipsum', id: '8' },
    ];
    setMessages(arr);
  }, []);

  return (
    <div className={styles['chat-box']}>
      <div className={styles.name}>
        <h4>Kent Dodds</h4>
      </div>
      <div className={styles.messages}>
        {messages &&
          messages.map(message => {
            return (
              <ChatContainer
                text={message.text}
                mine={message.mine}
                id={message.id}
                key={message.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ChatBox;
