import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const PatientSidebarContent = ({
  styles,
}: {
  styles: { [key: string]: any };
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Button leftIcon={<FaPlus />} className={styles.button}>
        {t('schedule')}
      </Button>
      <ul>
        <li>
          <span onClick={() => navigate('search')}>{t('search')}</span>
        </li>
        <li>
          <span onClick={() => navigate('schedule')}>{t('schedule')}</span>
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

export default PatientSidebarContent;
