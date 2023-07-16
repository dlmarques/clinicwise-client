import { Button, Input } from '@chakra-ui/react';
import styles from './chat-input.module.scss';
import { FiSend } from 'react-icons/fi';

const ChatInput = () => {
  return (
    <div className={styles['chat-input']}>
      <Input variant="unstyled" placeholder="Escreve uma mensagem..." />
      <Button colorScheme="pink" variant="solid">
        <FiSend />
      </Button>
    </div>
  );
};

export default ChatInput;
