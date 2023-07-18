import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './welcome-card.module.scss';
import { FaTooth } from 'react-icons/fa';
import AppointmentCard from '../../../../shared/components/appointment-card/AppointmentCard';
import { Event } from '../../../../models/Event';
import EventsCarousel from '../../../../shared/components/events-carousel/EventsCarousel';

const WelcomeCard = () => {
  const { t } = useTranslation();
  const [nextEvents, setNextEvents] = useState<Event[]>([]);
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

  return (
    <div className={styles['welcome-card']}>
      <h1>
        <span>{t('hi')}</span>, Daniel Lucas Marques.
      </h1>
      <p className={styles['next-event']}>{t('next_appointments')}</p>
      {nextEvents && <EventsCarousel events={nextEvents} />}
    </div>
  );
};

export default WelcomeCard;
