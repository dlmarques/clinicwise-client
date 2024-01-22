import styles from './sidebar.module.scss';
import { Button } from '@chakra-ui/react';
import { ReactComponent as LightLogo } from '../../../assets/logo/Main.svg';
import { ReactComponent as DarkLogo } from '../../../assets/logo/Inverted.svg';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRole, getUserTheme } from '../../../store/selectors';
import { userActions } from '../../../store/user/user';
import { ROLES } from '../../../utils/roles';
import AdminSidebarContent from '../../../modules/admin/sidebar-content/AdminSidebarContent';
import DoctorSidebarContent from '../../../modules/doctor/sidebar-content/DoctorSidebarContent';
import PatientSidebarContent from '../../../modules/patient/sidebar-content/PatientSidebarContent';
import OwnerSidebarContent from '../../../modules/owner/sidebar-content/OwnerSidebarContent';

const Sidebar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector(getUserTheme);
  const role = useSelector(getUserRole);

  const renderSidebarContentByRole = () => {
    switch (role) {
      case ROLES.ADMIN:
        return <AdminSidebarContent key={role} styles={styles} />;
      case ROLES.DOCTOR:
        return <DoctorSidebarContent key={role} />;
      case ROLES.PATIENT:
        return <PatientSidebarContent key={role} styles={styles} />;
      case ROLES.OWNER:
        return <OwnerSidebarContent key={role} />;

      default:
        break;
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {theme === 'dark' ? <DarkLogo /> : <LightLogo />}
      </div>
      <div className={styles.menu}>{renderSidebarContentByRole()}</div>
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
