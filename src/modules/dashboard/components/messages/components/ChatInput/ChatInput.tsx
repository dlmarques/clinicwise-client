import { Button, Input } from '@chakra-ui/react';
import styles from './chat-input.module.scss';
import { IoSend } from 'react-icons/io5';

const ChatInput = () => {
  return (
    <div className={styles['chat-input']}>
      <div className={styles['chat-input-field']}>
        <Input variant="unstyled" placeholder="Escreve uma mensagem..." />
        <Button colorScheme="pink" variant="solid">
          <IoSend />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
