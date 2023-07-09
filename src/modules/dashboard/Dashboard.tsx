import DashboardHistory from './components/dashboard-history/DashboardHistory';
import NextAppointments from './components/next-appointments/NextAppointments';
import PersonalCard from './components/personal-card/PersonalCard';
import DashboardSuggestions from './components/suggestions/DashboardSuggestions';
import WelcomeCard from './components/welcome-card/WelcomeCard';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <WelcomeCard />
        <DashboardSuggestions />
        <DashboardHistory />
      </div>
      <div className={styles.right}>
        <PersonalCard />
        <NextAppointments />
      </div>
    </div>
  );
};

export default Dashboard;
