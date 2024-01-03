import styles from './sidebar.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ReactComponent as LightLogo } from '../../../assets/logo/Main.svg';
import { ReactComponent as DarkLogo } from '../../../assets/logo/Inverted.svg';
import { FaMoon, FaPlus, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTheme } from '../../../store/selectors';
import { userActions } from '../../../store/user/user';

const Sidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(getUserTheme);
  console.log(theme);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {theme === 'dark' ? <DarkLogo /> : <LightLogo />}
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
      <div className={styles.theme}>
        <Button
          className={styles.button}
          onClick={() => dispatch(userActions.changeTheme())}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={theme === 'dark' ? t('light') : t('dark')}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
