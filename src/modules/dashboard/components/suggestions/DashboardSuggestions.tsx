import { useEffect, useState } from 'react';
import { DoctorData } from '../../../../models/DoctorData';
import styles from './dashboard-suggestions.module.scss';
import ProfileCard from '../../../../shared/components/profile-card/ProfileCard';

const DashboardSuggestions = () => {
  const [list, setList] = useState<DoctorData[]>([]);
  useEffect(() => {
    const arr = [
      {
        id: '',
        name: 'Manuel Marques',
        image:
          'https://www.freepnglogos.com/uploads/doctor-png/basic-ideas-for-logical-programs-for-doctor-home-loan-6.png',
        speciality: 'Nutrition',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
      {
        id: '',
        name: 'José Santos',
        image:
          'https://purepng.com/public/uploads/thumbnail/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctor-14215268567157bmxj.png',
        speciality: 'Dentist',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
      {
        id: '',
        name: 'Manuel Marques',
        image:
          'https://www.freepnglogos.com/uploads/doctor-png/basic-ideas-for-logical-programs-for-doctor-home-loan-6.png',
        speciality: 'Nutrition',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
      {
        id: '',
        name: 'José Santos',
        image:
          'https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-14215268571744ntgi.png',
        speciality: 'Dentist',
        age: 47,
        email: 'test@email.com',
        birth: '10/02/1970',
      },
    ];
    setList(arr);
  }, []);

  return (
    <div className={styles['dashboard-suggestions']}>
      <h3>Médicos Sugeridos</h3>
      <div className={styles.list}>
        {list.map((doctor, id) => {
          return (
            <ProfileCard
              key={id}
              image={doctor.image}
              name={doctor.name}
              speciality={doctor.speciality}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSuggestions;
