import styles from './profile-card.module.scss';

interface ProfileCardProps {
  image: string;
  name: string;
  speciality: string;
}

const ProfileCard = ({ image, name, speciality }: ProfileCardProps) => {
  return (
    <div className={styles['profile-card']}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{speciality}</p>
    </div>
  );
};

export default ProfileCard;
