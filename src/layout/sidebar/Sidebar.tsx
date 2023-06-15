import styles from "./sidebar.module.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>ClinicWise</h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <span onClick={() => navigate("settings")}>Menu1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
