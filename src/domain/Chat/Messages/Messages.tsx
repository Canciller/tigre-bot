import React, { FunctionComponent, RefObject } from 'react';
import styles from './Messages.module.scss';

import { v4 as uuid } from 'uuid';
import Message from '../../../components/Message';

interface MessagesProps {
  messages: Array<Record<string, any>>;
  waiting: boolean;
  endRef?: RefObject<HTMLDivElement>;
}

const Messages: FunctionComponent<MessagesProps> = ({ messages = [], waiting = false, endRef }: MessagesProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages.map((message) => (
            <Message key={uuid()} text={message.text} direction={message.direction} level={message.level} />
          ))}
          {waiting && <Message text="..." direction="LEFT" />}
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
