import { Avatar, AvatarBadge } from '@chakra-ui/react';
import styles from './profile-card.module.scss';

interface ProfileCardProps {
  image: string;
  name: string;
  speciality: string;
}

const ProfileCard = ({ image, name, speciality }: ProfileCardProps) => {
  return (
    <div className={styles['profile-card']}>
      <Avatar className={styles.avatar} src={image}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{speciality}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
