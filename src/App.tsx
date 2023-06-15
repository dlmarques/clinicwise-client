import styles from "./App.module.scss";
import Main from "./layout/main/Main";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className={styles.dashboard}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
