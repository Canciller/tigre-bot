import React, { FunctionComponent } from 'react';
import styles from './Chat.module.scss';

import TopBar from './TopBar';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <TopBar />
      <Messages />
      <WriteMessage />
    </div>
  );
};

export default Chat;
