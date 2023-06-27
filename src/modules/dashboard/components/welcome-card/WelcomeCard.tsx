import styles from './welcome-card.module.scss';
import { TbDental } from 'react-icons/tb';

const WelcomeCard = () => {
  return (
    <div className={styles['welcome-card']}>
      <h1>
        <span>Olá</span>, Daniel Lucas Marques!
      </h1>
      <p className={styles['next-event']}>Próximo agendamento:</p>
      <div className={styles['event-card']}>
        <div>
          <TbDental />
        </div>
        <div>
          <p>Dentista - 22 de julho</p>
          <p>Dr. Manuel Costa</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
