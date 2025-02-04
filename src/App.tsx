import styles from './App.module.css';

function App() {
  return (
    <>
      <h1 className={styles.title}>Weather Page</h1>

      <div className={styles.container}>
        <p>Place</p>
        <p>Info</p>
      </div>
    </>
  );
}

export default App;
