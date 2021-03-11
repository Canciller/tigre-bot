import React, { FunctionComponent } from 'react';
import styles from './Chat.module.scss';

import TopBar from './TopBar';
import Messages from './Messages';
import QuestionHints from './QuestionHints';
import WriteMessage from './WriteMessage';

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <TopBar />
      <Messages />
      <QuestionHints />
      <WriteMessage />
    </div>
  );
};

export default Chat;
