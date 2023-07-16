import ChatUser from '../User/User';
import styles from './users-list.module.scss';

const UsersList = () => {
  return (
    <div className={styles['users-list']}>
      <ChatUser source="https://bit.ly/kent-c-dodds" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/prosper-baba" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/code-beast" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/kent-c-dodds" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/ryan-florence" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/kent-c-dodds" name="Kent Dodds" />
      <ChatUser source="https://bit.ly/prosper-baba" name="Kent Dodds" />
    </div>
  );
};

export default UsersList;
