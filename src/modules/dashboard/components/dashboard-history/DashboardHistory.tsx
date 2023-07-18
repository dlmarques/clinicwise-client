import { useEffect, useState } from 'react';
import styles from './dashboard-history.module.scss';
import { Event } from '../../../../models/Event';
import ListItem from '../../../../shared/components/list-item/ListItem';
import { useTranslation } from 'react-i18next';

const DashboardHistory = () => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<Event[]>([]);
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
    setHistory(arr);
  }, []);

  return (
    <div className={styles['dashboard-history']}>
      <h3>{t('history')}</h3>
      <div className={styles.list}>
        {history &&
          history.map((item, id) => {
            return (
              <ListItem
                key={id}
                name={item.type}
                description={t(item.type) + ' - ' + t(item.speciality)}
                date={item.date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashboardHistory;
