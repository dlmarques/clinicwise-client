import { getIcon } from '../../../utils/functions/getIcon';
import styles from './list-item.module.scss';

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
      <p>{date}</p>
    </div>
  );
};

export default ListItem;
