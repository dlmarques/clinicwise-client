import { useEffect, useState } from 'react';
import { DoctorData } from '../../../../models/DoctorData';
import styles from './dashboard-suggestions.module.scss';
import ProfileCard from '../../../../shared/components/profile-card/ProfileCard';
import { useTranslation } from 'react-i18next';
import doc3 from '../../../../assets/mock_photos/doc3.jpg';
import doc4 from '../../../../assets/mock_photos/doc4.jpg';

const DashboardSuggestions = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<DoctorData[]>([]);
  useEffect(() => {
    const arr = [
      {
        id: '',
        name: 'Manuel Marques',
        image: doc4,
        speciality: 'nutrition',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
      {
        id: '',
        name: 'José Santos',
        image: doc3,
        speciality: 'dentist',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
      {
        id: '',
        name: 'Manuel Marques',
        image: doc3,
        speciality: 'nutrition',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
    ];
    setList(arr);
  }, []);

  return (
    <div className={styles['dashboard-suggestions']}>
      <h3>{t('suggested_doctors')}</h3>
      <div className={styles.list}>
        {list.map((doctor, id) => {
          return (
            <ProfileCard
              key={id}
              image={doctor.image}
              name={doctor.name}
              speciality={t(doctor.speciality)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSuggestions;
