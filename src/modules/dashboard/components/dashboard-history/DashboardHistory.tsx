import { useEffect, useState } from 'react';
import styles from './dashboard-history.module.scss';
import { Event } from '../../../../models/Event';
import ListItem from '../../../../shared/components/list-item/ListItem';

const DashboardHistory = () => {
  const [history, setHistory] = useState<Event[]>([]);
  useEffect(() => {
    const arr = [
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'Cardiologia',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_cons',
        speciality: 'Dentista',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'emergency',
        speciality: 'Neurologia',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'Dentista',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'emergency',
        speciality: 'Neurologia',
      },
      {
        id: '',
        date: '10-05-2023',
        type: 'medical_exam',
        speciality: 'Dentista',
      },
    ];
    setHistory(arr);
  }, []);

  return (
    <div className={styles['dashboard-history']}>
      <h3>Histórico</h3>
      <div className={styles.list}>
        {history.map((item, id) => {
          return (
            <ListItem
              key={id}
              name={item.type}
              description={item.speciality}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardHistory;
