import React, { FunctionComponent } from 'react';
import styles from './Messages.module.scss';

import { v4 as uuid } from 'uuid';
import Message from '../../../components/Message';

interface MessagesProps {
  messages?: Array<Record<string, any>>;
}

const Messages: FunctionComponent<MessagesProps> = ({ messages = [] }: MessagesProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.messages}>
          {messages.map((message) => (
            <Message key={uuid()} text={message.text} direction={message.direction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
