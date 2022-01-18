import React from 'react';
import styles from './app.module.scss';

import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Profile from './Components/Profile/Profile';
import Sidebar from './Components/Sidebar/Sidebar';

function App({store}) {

  return (
    <div className="App">
      <Layout>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <Profile profile={store._state.profilePage} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
