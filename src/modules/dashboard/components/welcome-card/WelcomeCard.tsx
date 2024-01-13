import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './welcome-card.module.scss';
import { Event } from '../../../../models/Event';
import EventsCarousel from '../../../../shared/components/events-carousel/EventsCarousel';
import { UserState } from '../../../../models/State';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../../store/selectors';

const WelcomeCard = () => {
  const { t } = useTranslation();
  const [nextEvents, setNextEvents] = useState<Event[]>([]);
  const userInfo: UserState = useSelector(getUserInfo);

  useEffect(() => {
    const arr = [
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'cardiology',
        doctor: '',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_cons',
        speciality: 'dentist',
        doctor: '',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'emergency',
        speciality: 'neurology',
        doctor: '',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'dentist',
        doctor: '',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'emergency',
        speciality: 'neurology',
        doctor: '',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'dentist',
        doctor: '',
      },
    ];
    setNextEvents(arr);
  }, []);

  useEffect(() => {
    console.log('user info changed', userInfo);
  }, [userInfo]);

  return (
    <div className={styles['welcome-card']}>
      <h1>
        <span>{t('hi')}</span>, {userInfo.name}.
      </h1>
      <p className={styles['next-event']}>{t('next_appointments')}</p>
      {nextEvents && <EventsCarousel events={nextEvents} />}
    </div>
  );
};

export default WelcomeCard;
