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
      {nextEvents && nextEvents.length > 3 ? (
        <EventsCarousel events={nextEvents} />
      ) : (
        <div className={styles.list}>
          <AppointmentCard
            icon={<FaTooth />}
            speciality="dentist"
            date="22 de julho"
            doctor="Manuel Costa"
          />
          <AppointmentCard
            icon={<FaTooth />}
            speciality="cardiology"
            date="22 de julho"
            doctor="Manuel Costa"
          />
          <AppointmentCard
            icon={<FaTooth />}
            speciality="neurology"
            date="22 de julho"
            doctor="Manuel Costa"
          />
        </div>
      )}
    </div>
  );
};

export default WelcomeCard;
