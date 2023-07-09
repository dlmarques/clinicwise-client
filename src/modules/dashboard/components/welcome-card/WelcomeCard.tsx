import { useTranslation } from 'react-i18next';
import styles from './welcome-card.module.scss';
import { TbDental } from 'react-icons/tb';

const WelcomeCard = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['welcome-card']}>
      <h1>
        <span>{t('hi')}</span>, Daniel Lucas Marques!
      </h1>
      <p className={styles['next-event']}>{t('next_appointment')}:</p>
      <div className={styles['event-card']}>
        <div>
          <TbDental />
        </div>
        <div>
          <p>{t('dentist')} - 22 de julho</p>
          <p>Dr. Manuel Costa</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
