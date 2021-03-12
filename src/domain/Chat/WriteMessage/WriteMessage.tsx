import React, { FunctionComponent, useState } from 'react';
import styles from './WriteMessage.module.scss';
import SendIcon from '../../../components/SendIcon';

export type OnMessageWritten = (text: string) => void;

interface WriteMessageProps {
  onMessageWritten?: OnMessageWritten;
}

const WriteMessage: FunctionComponent<WriteMessageProps> = ({ onMessageWritten }: WriteMessageProps) => {
  const [text, setText] = useState('');

  return (
    <div className={styles.root}>
      <input onChange={(e) => setText(e.target.value)} className={styles.message} type="text" />
      <div
        onClick={(e) => {
          if (onMessageWritten && text !== '') onMessageWritten(text);
          e.preventDefault();
        }}
        className={styles.send}
      >
        <SendIcon />
      </div>
    </div>
  );
};

export default WriteMessage;
