import React, { FunctionComponent } from 'react';
import styles from './Home.module.scss';

import Chat from '../../domain/Chat';

const Home: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Chat />
    </div>
  );
};

export default Home;
