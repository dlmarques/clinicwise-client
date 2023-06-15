import styles from './App.module.scss';
import WebDefault from './layout/screens/web-default/WebDefault';

function App() {
  return (
    <>
      <div className={styles.dashboard}>
        <WebDefault />
      </div>
    </>
  );
}

export default App;
