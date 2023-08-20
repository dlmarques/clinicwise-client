import ChatUser from '../User/User';
import styles from './users-list.module.scss';

const UsersList = () => {
  const chats = [
    {
      id: '1',
      name: 'Kent Dodds',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'lorem ipsum lorem ipsum lorem ipsum',
    },
    {
      id: '2',
      name: 'Another Person',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Hello from another person!',
    },
    {
      id: '3',
      name: 'Yet Another Person',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Greetings from yet another person!',
    },
    {
      id: '4',
      name: 'Person Four',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Message from person four.',
    },
    {
      id: '5',
      name: 'Person Five',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Fifth person saying hello!',
    },
    {
      id: '6',
      name: 'Person Six',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Sixth persons message.',
    },
    {
      id: '7',
      name: 'Person Seven',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Greetings from person seven!',
    },
    {
      id: '8',
      name: 'Person Eight',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Eighth person checking in.',
    },
    {
      id: '9',
      name: 'Person Nine',
      image: 'https://bit.ly/kent-c-dodds',
      message: 'Ninth person sending regards.',
    },
  ];

  return (
    <div className={styles['users-list']}>
      {chats &&
        chats.map(chat => {
          return (
            <ChatUser
              key={chat.id}
              id={chat.id}
              name={chat.name}
              source={chat.image}
              message={chat.message}
            />
          );
        })}
    </div>
  );
};

export default UsersList;
