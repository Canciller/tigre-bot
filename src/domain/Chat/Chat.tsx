import React, { FunctionComponent } from 'react';
import styles from './Chat.module.scss';

import TopBar from './TopBar';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <TopBar />
      <Messages
        messages={[
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
          },
          {
            text: 'aaaaaaaaaaaaaaaaaaaaa',
          },
          {
            text: 'nice nice nice',
            direction: 'LEFT',
          },
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
            direction: 'LEFT',
          },
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
          },
          {
            text: 'aaaaaaaaaaaaaaa aaaaaaaaa aaaa',
          },
          {
            text: 'nice nice nice',
          },
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
          },
          {
            text: 'aaaaaaaaaaaaaaaaaaaaa',
          },
          {
            text: 'nice nice nice',
            direction: 'LEFT',
          },
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
            direction: 'LEFT',
          },
          {
            text:
              'long long long long long long long long long long long long long long long long long long long long long',
          },
          {
            text: 'aaaaaaaaaaaaaaa aaaaaaaaa aaaa',
          },
          {
            text: 'nice nice nice',
          },
        ]}
      />
      <WriteMessage />
    </div>
  );
};

export default Chat;
