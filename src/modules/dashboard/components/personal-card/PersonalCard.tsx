import styles from './personal-card.module.scss';
import AvatarCard from '../../../../shared/components/avatar-card/AvatarCard';
import { useTranslation } from 'react-i18next';

const PersonalCard = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['personal-card']}>
      <div className={styles.avatar}>
        <AvatarCard
          name="Daniel Marques"
          photo="https://bit.ly/dan-abramov"
          showName={true}
          avatarSize="xl"
        />
      </div>
      <div className={styles.info}>
        <p>{t('policy_number')} 123823212</p>
        <p>{t('household')}: 4</p>
      </div>
    </div>
  );
};

export default PersonalCard;
