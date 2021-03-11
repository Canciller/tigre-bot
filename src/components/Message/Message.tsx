import React, { FunctionComponent } from 'react';
import styles from './Message.module.scss';

interface MessageProps {
  text?: string;
  direction?: 'RIGHT' | 'LEFT';
}

const Message: FunctionComponent<MessageProps> = ({ text = '', direction = 'RIGHT' }: MessageProps) => {
  return (
    <div className={`${styles.root} ${direction == 'RIGHT' ? styles.right : styles.left}`}>
      <div className={`${styles.message}`}>{text}</div>
    </div>
  );
};

export default Message;
