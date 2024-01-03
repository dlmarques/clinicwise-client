import styles from './loading.module.scss';
import { ReactComponent as Logo } from '../../../assets/logo/Main.svg';
import { Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Spinner size="xl" />
    </div>
  );
};

export default Loading;
