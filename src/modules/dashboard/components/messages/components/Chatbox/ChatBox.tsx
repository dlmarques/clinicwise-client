import { useState, useEffect } from 'react';
import styles from './chat-box.module.scss';
import ChatContainer from '../ChatContainer/ChatContainer';
import { Message } from '../../../../../../models/Message';
import { Avatar, AvatarBadge } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import ChatInput from '../ChatInput/ChatInput';
import { useDispatch } from 'react-redux';
import { chatActions } from '../../../../../../store/user/chat';

const ChatBox = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const arr = [
      {
        mine: false,
        text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        id: '1',
      },
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

  const deselectChat = () => dispatch(chatActions.deselectChat());

  return (
    <div className={styles['chat-box']}>
      <div className={styles.header}>
        <IoIosArrowBack onClick={() => deselectChat()} />
        <div className={styles.name}>
          <Avatar size="md" src="https://bit.ly/kent-c-dodds">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <h4>Kent Dodds</h4>
        </div>
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
      <ChatInput />
    </div>
  );
};

export default ChatBox;
