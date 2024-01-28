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
import { LuLogOut } from 'react-icons/lu';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const { t } = useTranslation();
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <div className={styles.logo} onClick={() => navigate('/app/dashboard')}>
        {theme === 'dark' ? <DarkLogo /> : <LightLogo />}
      </div>
      <div className={styles.menu}>{renderSidebarContentByRole()}</div>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          onClick={() => dispatch(userActions.changeTheme())}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={theme === 'dark' ? t('light') : t('dark')}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
        <Button
          className={styles.button}
          onClick={() => logout()}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={t('logout')}
        >
          <LuLogOut />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
