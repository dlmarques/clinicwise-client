import { useTranslation } from 'react-i18next';
import styles from './appointment-card.module.scss';

interface AppointmentCardProps {
  icon: any;
  speciality: string;
  date: string;
  doctor: string;
  isNext: boolean;
}

const AppointmentCard = ({
  icon,
  speciality,
  date,
  doctor,
  isNext,
}: AppointmentCardProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        isNext ? styles['next-appointment-card'] : styles['appointment-card']
      }
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <p>{t(speciality)}</p>
        <p>{date}</p>
        <p>Dr. {doctor}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
