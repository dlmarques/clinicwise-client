import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const DoctorSidebarContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <span onClick={() => navigate('search')}>{t('search')}</span>
        </li>
        <li>
          <span onClick={() => navigate('appointment_book')}>
            {t('appointment_book')}
          </span>
        </li>
        <li>
          <span onClick={() => navigate('documents')}>{t('documents')}</span>
        </li>
        <li>
          <span onClick={() => navigate('profile')}>{t('my_profile')}</span>
        </li>
      </ul>
    </>
  );
};

export default DoctorSidebarContent;
