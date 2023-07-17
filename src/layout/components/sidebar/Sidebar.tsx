import styles from './sidebar.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ReactComponent as Logo } from '../../../assets/logo/Main.svg';
import { FaPlus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <Button leftIcon={<FaPlus />} className={styles.button}>
          {t('schedule')}
        </Button>
        <ul>
          <li>
            <span onClick={() => navigate('settings')}>{t('search')}</span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>
              {t('appointment_book')}
            </span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>{t('documents')}</span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>{t('my_profile')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
