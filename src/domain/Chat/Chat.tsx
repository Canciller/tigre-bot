import React, { FunctionComponent, useContext } from 'react';
import styles from './Chat.module.scss';

import TopBar from './TopBar';
import Messages from './Messages';
import WriteMessage from './WriteMessage';
import { MessagesContext } from '../../context/Messages';

const Chat: FunctionComponent = () => {
  const { messages, dispatch } = useContext(MessagesContext);

  return (
    <div className={styles.root}>
      <TopBar />
      <Messages messages={messages} />
      <WriteMessage
        onMessageWritten={(text: string) => {
          if (dispatch) dispatch({ type: 'ADD', message: { text, direction: 'RIGHT' } });
        }}
      />
    </div>
  );
};

export default Chat;
