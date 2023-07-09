import { Avatar } from '@chakra-ui/react';
import styles from './avatar-card.module.scss';

interface AvatarCardProps {
  name: string;
  photo: string;
  showName: boolean;
  avatarSize?: string;
}

const AvatarCard = ({ name, photo, showName, avatarSize }: AvatarCardProps) => {
  return (
    <div className={styles['avatar-card']}>
      <Avatar size={avatarSize} name={name} src={photo} />
      {showName && <span>{name}</span>}
    </div>
  );
};

export default AvatarCard;
