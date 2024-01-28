import { Route, Routes } from 'react-router-dom';
import styles from './main.module.scss';
import { getUserRole } from '../../../store/selectors';
import { useSelector } from 'react-redux';
import { ROLES } from '../../../utils/roles';
import OwnerDashboard from '../../../modules/owner/dashboard/OwnerDashboard';
import OwnerProfile from '../../../modules/owner/profile/OwnerProfile';
import OwnerDatabase from '../../../modules/owner/database/OwnerDatabase';
import OwnerAnalytics from '../../../modules/owner/analytics/OwnerAnalytics';

const Main = () => {
  const role = useSelector(getUserRole);

  const getRoutes = () => {
    switch (role) {
      case ROLES.ADMIN:
        return (
          <Routes>
            <Route path="/dashboard" />
            <Route path="/schedule" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );

      case ROLES.PATIENT:
        return (
          <Routes>
            <Route path="/dashboard" />
            <Route path="/schedule" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );

      case ROLES.DOCTOR:
        return (
          <Routes>
            <Route path="/dashboard" />
            <Route path="/appointment_book" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );
      case ROLES.OWNER:
        return (
          <Routes>
            <Route path="/dashboard" element={<OwnerDashboard />} />
            <Route path="/database" element={<OwnerDatabase />} />
            <Route path="/analytics" element={<OwnerAnalytics />} />
            <Route path="/profile" element={<OwnerProfile />} />
          </Routes>
        );
      default:
        break;
    }
  };

  return <div className={styles.main}>{getRoutes()}</div>;
};

export default Main;
