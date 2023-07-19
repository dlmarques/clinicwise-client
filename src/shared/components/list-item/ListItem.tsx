import { getIcon } from '../../../utils/functions/getIcon';
import styles from './list-item.module.scss';
import { HiDotsHorizontal } from 'react-icons/hi';

interface ListItem {
  name: string;
  description: string;
  date: string;
}

const ListItem = ({ name, description, date }: ListItem) => {
  return (
    <div className={styles['list-item']}>
      <div className={styles.title}>
        {getIcon(name)}
        <p>{description}</p>
      </div>
      <div className={styles.options}>
        <p>{date}</p>
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default ListItem;
