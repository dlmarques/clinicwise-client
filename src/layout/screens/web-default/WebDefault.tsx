import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import styles from './web-default.module.scss';

const WebDefault = () => {
  return (
    <div className={styles['web-default']}>
      <Sidebar />
      <div className={styles.right}>
        <Topbar />
        <Main />
      </div>
    </div>
  );
};

export default WebDefault;
