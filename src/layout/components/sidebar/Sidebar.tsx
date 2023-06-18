import styles from './sidebar.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import logo from '../../../assets/logo.png';
import { FaPlus } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <Button
          backgroundColor={'#009DDA'}
          color={'#fff'}
          leftIcon={<FaPlus />}
        >
          Marcar
        </Button>
        <ul>
          <li>
            <span onClick={() => navigate('settings')}>Pesquisa rápida</span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>A minha agenda</span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>Documentos</span>
          </li>
          <li>
            <span onClick={() => navigate('settings')}>Meu Perfil</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <FiLogOut />
      </div>
    </div>
  );
};

export default Sidebar;
