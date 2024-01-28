import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const OwnerSidebarContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <span onClick={() => navigate('search')}>{t('search')}</span>
        </li>
        <li>
          <span onClick={() => navigate('database')}>{t('database')}</span>
        </li>
        <li>
          <span onClick={() => navigate('analytics')}>{t('analytics')}</span>
        </li>
        <li>
          <span onClick={() => navigate('profile')}>{t('my_profile')}</span>
        </li>
      </ul>
    </>
  );
};

export default OwnerSidebarContent;
