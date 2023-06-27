import DashboardHistory from './components/dashboard-history/DashboardHistory';
import DashboardSuggestions from './components/suggestions/DashboardSuggestions';
import WelcomeCard from './components/welcome-card/WelcomeCard';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <WelcomeCard />
      <DashboardSuggestions />
      <DashboardHistory />
    </div>
  );
};

export default Dashboard;
