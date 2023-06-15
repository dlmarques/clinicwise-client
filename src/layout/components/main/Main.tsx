import { Route, Routes } from 'react-router-dom';
import styles from './main.module.scss';
import Dashboard from '../../../modules/dashboard/Dashboard';
import Settings from '../../../modules/settings/Settings';

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Main;
