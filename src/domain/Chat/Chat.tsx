import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Chat.module.scss';

import TopBar from './TopBar';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

import { MessagesContext } from '../../context/Messages';
import MessageService from '../../services/MessageService';

const Chat: FunctionComponent = () => {
  const endRef = React.createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    if (endRef) endRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const { messages, dispatch } = useContext(MessagesContext);

  const addMessage = (message: any) => {
    if (dispatch) dispatch({ type: 'ADD', message });
  };

  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.root}>
      <TopBar />
      <Messages endRef={endRef} messages={messages} waiting={waiting} />
      <WriteMessage
        onMessageWritten={(text: string) => {
          addMessage({
            text,
            direction: 'RIGHT',
          });

          setWaiting(true);
          MessageService.send(text)
            .then((message) => addMessage(message))
            .finally(() => setWaiting(false));
        }}
      />
    </div>
  );
};

export default Chat;
