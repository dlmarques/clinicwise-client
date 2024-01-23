import { Route, Routes } from 'react-router-dom';
import styles from './main.module.scss';
import { getUserRole } from '../../../store/selectors';
import { useSelector } from 'react-redux';
import { ROLES } from '../../../utils/roles';

const Main = () => {
  const role = useSelector(getUserRole);

  const getRoutes = () => {
    switch (role) {
      case ROLES.ADMIN:
        return (
          <Routes>
            <Route path="/schedule" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );

      case ROLES.PATIENT:
        return (
          <Routes>
            <Route path="/schedule" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );

      case ROLES.DOCTOR:
        return (
          <Routes>
            <Route path="/appointment_book" />
            <Route path="/documents" />
            <Route path="/profile" />
          </Routes>
        );
      case ROLES.OWNER:
        return (
          <Routes>
            <Route path="/database" />
            <Route path="/analytics" />
            <Route path="/profile" />
          </Routes>
        );
      default:
        break;
    }
  };

  return <div className={styles.main}>{getRoutes()}</div>;
};

export default Main;
