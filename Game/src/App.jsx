import React from 'react';
import EventListPage from './pages/EventListPage/EventListPage';
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <EventListPage />
    </div>
  );
};

export default App;
