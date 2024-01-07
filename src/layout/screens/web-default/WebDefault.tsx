import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/Sidebar';
import styles from './web-default.module.scss';

const WebDefault = () => {
  return (
    <div className={styles['web-default']}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default WebDefault;
